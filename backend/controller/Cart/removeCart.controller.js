const { poolConn } = require("../../db/dbConfig");

const removeFromCart = async (req, res) => {
  try {
    const product_id = req.params.product_id;
    const user_id = req.user.id;

    if (!user_id || !product_id) {
      return res.status(400).json({ message: "Invalid or missing fields" });
    }

    const [result] = await poolConn.execute(
      `UPDATE cart_items 
       SET is_deleted = 1 
       WHERE id = ? AND product_id = ? AND is_deleted = 0`,
      [user_id, product_id],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    return res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    console.error("Remove from cart error:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = { removeFromCart };
