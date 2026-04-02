const { poolConn } = require("../../db/dbConfig");

const listProducts = async (req, res) => {
  try {
    // 🔹 FETCH ALL ACTIVE PRODUCTS
    const [products] = await poolConn.execute(`
      SELECT 
        p.product_id,
        p.product_name,
        p.slug,
        p.short_description,
        p.full_description,
        p.sku,
        p.current_price,
        p.original_price,
        p.discount_percentage,
        p.stock_quantity,
        p.is_active,
        c.cat_id,
        c.cat_name AS category_name,
        b.brand_id,
        b.brand_name AS brand_name
      FROM products p
      JOIN categories c ON p.cat_id = c.cat_id
      JOIN brands b ON p.brand_id = b.brand_id
      WHERE p.softDelete = 0
      ORDER BY p.product_id DESC
    `);

    if (products.length === 0) {
      return res.status(200).json({ message: "No products found", data: [] });
    }

    // 🔹 RESPONSE
    return res.status(200).json({
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = listProducts;
