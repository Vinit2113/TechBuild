const { poolConn } = require("../../db/dbConfig");

const addToCart = async (req, res) => {
  try {
    const { quantity } = req.body;
    const product_id = req.params.product_id; // ✅ FIXED
    const user_id = req.user.id;

    // Validate input
    if (!user_id || !product_id || !quantity || quantity <= 0) {
      return res.status(400).json({ message: "Invalid or missing fields" });
    }

    // Upsert cart item
    const [result] = await poolConn.execute(
      `INSERT INTO cart_items (id, product_id, quantity) 
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE 
         quantity = quantity + VALUES(quantity), 
         is_deleted = 0, 
         added_at = CURRENT_TIMESTAMP`,
      [user_id, product_id, quantity],
    );

    const message =
      result.affectedRows === 1
        ? "Item added to cart"
        : "Cart item updated successfully";

    return res.status(200).json({ message });
  } catch (error) {
    console.error("Add to cart error:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = { addToCart };
