const { poolConn } = require("../../db/dbConfig");

const getProductList = async (req, res) => {
  try {
    const user_id = req.user.id; // ✅ logged-in user

    if (!user_id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const [products] = await poolConn.execute(
      `
SELECT 
    p.product_id,
    p.product_name,
    p.current_price,
    p.original_price,
    p.discount_percentage,
    pm.media_url AS product_image,
    c.quantity
FROM cart_items c
JOIN products p ON c.product_id = p.product_id
LEFT JOIN product_media pm 
    ON p.product_id = pm.product_id
    AND pm.is_main = TRUE
    AND pm.softDelete = FALSE
WHERE c.id = ?   -- ✅ user filter here
  AND c.is_deleted = 0
  AND p.softDelete = FALSE
ORDER BY c.cart_id DESC;
      `,
      [user_id],
    );

    return res.status(200).json({
      message: "Your product list fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error("Get product list error:", error);
    return res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};

module.exports = { getProductList };
