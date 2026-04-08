const { poolConn } = require("../../db/dbConfig");
const { calculateCartTotals } = require("./cartHalpers");


const getProductList = async (req, res) => {
  try {
    const user_id = req.user.id;
    if (!user_id) return res.status(401).json({ message: "Unauthorized" });

    const serverUrl = "http://localhost:54807";

    const [products] = await poolConn.execute(
      `SELECT 
        p.product_id,
        p.product_name,
        p.current_price,
        p.original_price,
        p.discount_percentage,
        (p.current_price * c.quantity) AS item_total,
        COALESCE(
          CONCAT(?, pm.media_url),
          CONCAT(?, '/default-image.jpg')
        ) AS product_image,
        c.quantity
      FROM cart_items c
      JOIN products p ON c.product_id = p.product_id
      LEFT JOIN product_media pm 
        ON p.product_id = pm.product_id 
        AND pm.softDelete = 0
        AND pm.is_main = 1
      WHERE c.id = ?
        AND c.is_deleted = 0
        AND p.softDelete = 0
      ORDER BY c.cart_id DESC;`,
      [serverUrl, serverUrl, user_id],
    );

    const totals = await calculateCartTotals(user_id);

    return res.status(200).json({
      message: "Your product list fetched successfully",
      data: products,
      totals,
    });
  } catch (error) {
    console.error("Get product list error:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = { getProductList };
