const { poolConn } = require("../../db/dbConfig");

const createProduct = async (req, res) => {
  try {
    const {
      cat_id,
      brand_id,
      product_name,
      short_description,
      full_description,
      sku,
      current_price,
      original_price,
      stock_quantity,
      is_active,
    } = req.body;

    // 🔹 VALIDATION
    if (!product_name || product_name.trim().length === 0) {
      return res.status(400).json({ message: "Product name is required!" });
    }

    if (!cat_id || !brand_id) {
      return res
        .status(400)
        .json({ message: "Category and Brand are required!" });
    }

    if (!current_price) {
      return res.status(400).json({ message: "Current price is required!" });
    }

    // 🔹 CHECK CATEGORY EXISTS
    const [existingCategory] = await poolConn.execute(
      `SELECT cat_id FROM categories WHERE cat_id = ?`,
      [cat_id],
    );

    if (existingCategory.length === 0) {
      return res.status(404).json({ message: "Category not found!" });
    }

    // 🔹 CHECK BRAND EXISTS
    const [existingBrand] = await poolConn.execute(
      `SELECT brand_id FROM brands WHERE brand_id = ?`,
      [brand_id],
    );

    if (existingBrand.length === 0) {
      return res.status(404).json({ message: "Brand not found!" });
    }

    // 🔹 GENERATE SLUG
    const slug = product_name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    // 🔹 CALCULATE DISCOUNT
    let discount_percentage = null;
    if (original_price && original_price > current_price) {
      discount_percentage =
        ((original_price - current_price) / original_price) * 100;
    }

    // 🔹 INSERT PRODUCT
    const [result] = await poolConn.execute(
      `
      INSERT INTO products 
      (cat_id, brand_id, product_name, slug, short_description, full_description, sku, current_price, original_price, discount_percentage, stock_quantity, is_active, softDelete)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        cat_id,
        brand_id,
        product_name.trim(),
        slug,
        short_description || null,
        full_description || null,
        sku || null,
        current_price,
        original_price || null,
        discount_percentage,
        stock_quantity || 0,
        is_active !== undefined ? is_active : 1,
        0, // softDelete false (active)
      ],
    );

    // 🔹 RESPONSE
    return res.status(201).json({
      message: "Product created successfully",
      data: {
        product_id: result.insertId,
        cat_id,
        brand_id,
        product_name: product_name.trim(),
        slug,
        short_description: short_description || null,
        full_description: full_description || null,
        sku: sku || null,
        current_price,
        original_price: original_price || null,
        discount_percentage,
        stock_quantity: stock_quantity || 0,
        is_active: is_active !== undefined ? is_active : 1,
      },
    });
  } catch (error) {
    console.error("Error creating product:", error);

    // 🔹 HANDLE DUPLICATE SLUG OR SKU
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(400).json({
        message: "Duplicate entry! Slug or SKU already exists.",
      });
    }

    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = createProduct;
