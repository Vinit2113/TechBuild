const { poolConn } = require("../../db/dbConfig");

const getAllProductsWithImages = async (req, res) => {
  try {
    const [rows] = await poolConn.execute(`
      SELECT 
        p.product_id,
        p.cat_id,
        p.brand_id,
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

        pm.media_id,
        pm.media_type,
        pm.media_url,
        pm.alt_text,
        pm.is_main,
        pm.display_order

      FROM products p
      LEFT JOIN product_media pm 
        ON p.product_id = pm.product_id
        AND pm.softDelete = 0

      WHERE p.softDelete = 0
      ORDER BY p.product_id DESC, pm.display_order ASC
    `);

    // 🔹 GROUP DATA
    const productMap = {};

    rows.forEach((row) => {
      // Create product if not exists
      if (!productMap[row.product_id]) {
        productMap[row.product_id] = {
          product_id: row.product_id,
          cat_id: row.cat_id,
          brand_id: row.brand_id,
          product_name: row.product_name,
          slug: row.slug,
          short_description: row.short_description,
          full_description: row.full_description,
          sku: row.sku,
          current_price: row.current_price,
          original_price: row.original_price,
          discount_percentage: row.discount_percentage,
          stock_quantity: row.stock_quantity,
          is_active: row.is_active,
          images: [],
        };
      }

      // Add image if exists
      if (row.media_id) {
        productMap[row.product_id].images.push({
          media_id: row.media_id,
          media_type: row.media_type,
          media_url: row.media_url,
          alt_text: row.alt_text,
          is_main: row.is_main,
          display_order: row.display_order,
        });
      }
    });

    const result = Object.values(productMap);

    return res.status(200).json({
      message: "Products fetched successfully",
      count: result.length,
      data: result,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};

module.exports = getAllProductsWithImages;
