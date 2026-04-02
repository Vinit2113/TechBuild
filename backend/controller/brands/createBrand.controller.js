const { poolConn } = require("../../db/dbConfig");

const createBrand = async (req, res) => {
  try {
    const { brand_name, brand_logo, description, is_active } = req.body;

    // 🔹 VALIDATION
    if (!brand_name || brand_name.trim().length === 0) {
      return res.status(400).json({ message: "Brand name is required!" });
    }

    // 🔹 GENERATE SLUG
    const slug = brand_name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    // 🔹 CHECK IF BRAND ALREADY EXISTS
    const [existingBrand] = await poolConn.execute(
      `SELECT brand_id FROM brands WHERE brand_name = ? OR slug = ?`,
      [brand_name.trim(), slug],
    );

    if (existingBrand.length > 0) {
      return res.status(409).json({
        message: "Brand with same name or slug already exists!",
      });
    }

    // 🔹 INSERT BRAND
    const [result] = await poolConn.execute(
      `
      INSERT INTO brands 
      (brand_name, slug, brand_logo, description, is_active)
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        brand_name.trim(),
        slug,
        brand_logo || null,
        description || null,
        is_active !== undefined ? is_active : 1,
      ],
    );

    // 🔹 RESPONSE
    return res.status(201).json({
      message: "Brand created successfully",
      data: {
        brand_id: result.insertId,
        brand_name: brand_name.trim(),
        slug,
        brand_logo: brand_logo || null,
        description: description || null,
        is_active: is_active !== undefined ? is_active : 1,
      },
    });
  } catch (error) {
    console.error("Error creating brand:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = createBrand;
