const { poolConn } = require("../../db/dbConfig");
const { calculateCartTotals } = require("./cartHalpers");

const removeFromCart = async (req, res) => {
  try {
    const user_id = req.user.id;
    const product_id = req.params.product_id;

    await poolConn.execute(
      `UPDATE cart_items SET is_deleted = 1 WHERE id = ? AND product_id = ?`,
      [user_id, product_id],
    );

    const totals = await calculateCartTotals(user_id); // ✅ recalc totals

    return res.status(200).json({
      message: "Item removed successfully",
      totals, // send updated totals
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = { removeFromCart };
