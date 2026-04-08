const { poolConn } = require("../../db/dbConfig");

// ✅ ORDER SUMMARY CALCULATION (FINAL CORRECT VERSION)
const calculateCartTotals = async (user_id) => {
  const [cartItems] = await poolConn.execute(
    `SELECT 
        p.original_price,
        p.current_price,
        c.quantity
     FROM cart_items c
     JOIN products p ON c.product_id = p.product_id
     WHERE c.id = ? 
       AND c.is_deleted = 0 
       AND p.softDelete = 0`,
    [user_id],
  );

  let subtotal = 0;
  let discount = 0;

  cartItems.forEach((item) => {
    const originalPrice = item.original_price || item.current_price;
    const currentPrice = item.current_price;

    const itemOriginalTotal = originalPrice * item.quantity;
    const itemFinalTotal = currentPrice * item.quantity;

    subtotal += itemOriginalTotal;
    discount += itemOriginalTotal - itemFinalTotal;
  });

  const taxableAmount = subtotal - discount;
  const gst = taxableAmount * 0.18;
  const total = taxableAmount + gst;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    discount: Number(discount.toFixed(2)),
    gst: Number(gst.toFixed(2)),
    total: Number(total.toFixed(2)),
  };
};

module.exports = { calculateCartTotals };
