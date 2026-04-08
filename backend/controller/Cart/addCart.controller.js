const { poolConn } = require("../../db/dbConfig");
const { calculateCartTotals } = require("./cartHalpers");

const addToCart = async (req, res) => {
  try {
    const { quantity = 1 } = req.body;
    const product_id = req.params.product_id;
    const user_id = req.user.id;

    if (!user_id || !product_id || quantity <= 0) {
      return res.status(400).json({
        message: "Invalid or missing fields",
      });
    }

    // Check if the product is already in the cart
    const [existingRows] = await poolConn.execute(
      `SELECT id FROM cart_items 
       WHERE id = ? AND product_id = ? AND is_deleted = 0`,
      [user_id, product_id],
    );

    if (existingRows.length > 0) {
      return res.status(409).json({ message: "Already in cart" });
    }

    // Insert new item into cart
    await poolConn.execute(
      `INSERT INTO cart_items (id, product_id, quantity, added_at, is_deleted)
       VALUES (?, ?, ?, CURRENT_TIMESTAMP, 0)
       ON DUPLICATE KEY UPDATE 
         quantity = VALUES(quantity), 
         is_deleted = 0, 
         added_at = CURRENT_TIMESTAMP`,
      [user_id, product_id, quantity],
    );

    // Calculate updated totals after adding the product
    const totals = await calculateCartTotals(user_id);

    return res.status(200).json({
      message: "Item added to cart",
      quantity: quantity,
      totals, // send subtotal, discount, gst, total
    });
  } catch (error) {
    console.error("Add to cart error:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

const updateCartQuantity = async (req, res) => {
  try {
    const user_id = req.user.id;
    const product_id = req.params.product_id;
    const { quantity } = req.body;

    if (!user_id || !product_id || quantity < 1) {
      return res.status(400).json({ message: "Invalid data" });
    }

    await poolConn.execute(
      `UPDATE cart_items 
       SET quantity = ?, added_at = CURRENT_TIMESTAMP
       WHERE id = ? AND product_id = ? AND is_deleted = 0`,
      [quantity, user_id, product_id],
    );

    const totals = await calculateCartTotals(user_id);

    return res.status(200).json({
      message: "Quantity updated",
      totals,
    });
  } catch (error) {
    console.error("Update quantity error:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = { addToCart, updateCartQuantity };
