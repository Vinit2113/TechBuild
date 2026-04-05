const { poolConn } = require("../../db/dbConfig");

const getProductByIdWithFullDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await poolConn.execute(
      `
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
        p.cat_id,
        c.cat_name,
        c.cat_description,
        p.brand_id,
        b.brand_name,

        pm.media_id,
        pm.media_type,
        pm.media_url,
        pm.alt_text,
        pm.is_main,
        pm.display_order,

        ps.spec_id,
        ps.spec_group,
        ps.spec_name,
        ps.spec_value,

        pam.attribute_id,
        a.attribute_name,
        av.attribute_value_id,
        av.value AS attribute_value

      FROM products p
      LEFT JOIN categories c ON p.cat_id = c.cat_id
      LEFT JOIN brands b ON p.brand_id = b.brand_id

      LEFT JOIN product_media pm 
        ON p.product_id = pm.product_id
        AND pm.softDelete = 0

      LEFT JOIN product_specifications ps 
        ON p.product_id = ps.product_id
        AND ps.is_deleted = 0

      LEFT JOIN product_attribute_map pam
        ON p.product_id = pam.product_id
        AND pam.is_deleted = 0

      LEFT JOIN attributes a 
        ON pam.attribute_id = a.attribute_id
        AND a.is_deleted = 0

      LEFT JOIN attribute_values av
        ON pam.attribute_value_id = av.attribute_value_id
        AND av.deleted_at IS NULL

      WHERE p.softDelete = 0
      AND p.product_id = ?

      ORDER BY pm.display_order ASC
      `,
      [id],
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    let product = null;

    rows.forEach((row) => {
      // Initialize product once
      if (!product) {
        product = {
          product_id: row.product_id,
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
          cat_id: row.cat_id,
          category_name: row.cat_name,
          category_description: row.cat_description,
          brand_id: row.brand_id,
          brand_name: row.brand_name,
          images: [],
          specifications: [],
          attributes: [],
        };
      }

      // Add image
      if (
        row.media_id &&
        !product.images.some((img) => img.media_id === row.media_id)
      ) {
        product.images.push({
          media_id: row.media_id,
          media_type: row.media_type,
          media_url: row.media_url,
          alt_text: row.alt_text,
          is_main: row.is_main,
          display_order: row.display_order,
        });
      }

      // Add specification
      if (
        row.spec_id &&
        !product.specifications.some((spec) => spec.spec_id === row.spec_id)
      ) {
        product.specifications.push({
          spec_id: row.spec_id,
          spec_group: row.spec_group,
          spec_name: row.spec_name,
          spec_value: row.spec_value,
        });
      }

      // Add attribute
      if (
        row.attribute_value_id &&
        !product.attributes.some(
          (attr) => attr.attribute_value_id === row.attribute_value_id,
        )
      ) {
        product.attributes.push({
          attribute_id: row.attribute_id,
          attribute_name: row.attribute_name,
          attribute_value_id: row.attribute_value_id,
          attribute_value: row.attribute_value,
        });
      }
    });

    return res.status(200).json({
      message: "Product fetched successfully",
      data: product,
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = getProductByIdWithFullDetails;
