const { poolConn } = require("../../db/dbConfig");

const getProductsByCategory = async (req, res) => {
  try {
    const { category_id } = req.params; // Get category_id from request params

    if (!category_id) {
      return res.status(400).json({
        message: "category_id parameter is required",
      });
    }

    const [rows] = await poolConn.execute(
      `
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

        c.cat_name,
        c.cat_description,

        pm.media_id,
        pm.media_type,
        pm.media_url,
        pm.alt_text,
        pm.is_main,
        pm.display_order,

        ps.spec_id,
        ps.spec_group,
        ps.spec_name,
        ps.spec_value

      FROM products AS p

      LEFT JOIN categories AS c
        ON p.cat_id = c.cat_id

      LEFT JOIN product_media AS pm 
        ON p.product_id = pm.product_id
        AND pm.softDelete = 0

      LEFT JOIN product_specifications AS ps
        ON p.product_id = ps.product_id
        AND ps.is_deleted = 0

      WHERE p.softDelete = 0
        AND p.cat_id = ?
      ORDER BY p.product_id DESC, pm.display_order ASC
      `,
      [category_id],
    );

    // 🔹 GROUP DATA
    const productMap = {};

    rows.forEach((row) => {
      if (!productMap[row.product_id]) {
        productMap[row.product_id] = {
          product_id: row.product_id,
          cat_id: row.cat_id,
          category_name: row.cat_name || null,
          category_description: row.cat_description || null,
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
          specifications: [],
        };
      }

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

      if (row.spec_id) {
        productMap[row.product_id].specifications.push({
          spec_id: row.spec_id,
          spec_group: row.spec_group,
          spec_name: row.spec_name,
          spec_value: row.spec_value,
        });
      }
    });

    const result = Object.values(productMap);

    return res.status(200).json({
      message: "Products fetched successfully for this category",
      count: result.length,
      data: result,
    });
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};

module.exports = getProductsByCategory;
