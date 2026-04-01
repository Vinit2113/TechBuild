const { poolConn } = require("../../db/dbConfig");

const createCategory = async (req, res) => {
  try {
    const { nav_cat_id } = req.params;
    const { cat_name, cat_description, display_order, is_active } = req.body;

    // 🔹 VALIDATION
    if (!cat_name || cat_name.trim().length === 0) {
      return res.status(400).json({ message: "Category name is required!" });
    }

    // 🔹 CHECK nav_cat_id EXISTS
    const [existingNav] = await poolConn.execute(
      `SELECT nav_cat_id FROM nav_categories WHERE nav_cat_id = ?`,
      [nav_cat_id],
    );

    if (existingNav.length === 0) {
      return res
        .status(404)
        .json({ message: "Navigation category not found!" });
    }

    // 🔹 GENERATE SLUG
    const slug = cat_name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

    // 🔹 INSERT CATEGORY
    const [result] = await poolConn.execute(
      `
      INSERT INTO categories 
      (nav_cat_id, cat_name, slug, cat_description, display_order, is_active, softDelete)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      [
        nav_cat_id,
        cat_name.trim(),
        slug,
        cat_description || null,
        display_order || 0,
        is_active !== undefined ? is_active : 1,
        1, // default softDelete true
      ],
    );

    // 🔹 RESPONSE
    return res.status(201).json({
      message: "Category created successfully",
      data: {
        cat_id: result.insertId,
        nav_cat_id,
        cat_name: cat_name.trim(),
        slug,
        cat_description: cat_description || null,
        display_order: display_order || 0,
        is_active: is_active !== undefined ? is_active : 1,
      },
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = createCategory;
