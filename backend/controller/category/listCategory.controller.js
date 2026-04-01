const { poolConn } = require("../../db/dbConfig");

const listCategories = async (req, res) => {
  try {
    const { nav_cat_id } = req.params;

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

    // 🔹 FETCH CATEGORIES
    const [categories] = await poolConn.execute(
      `
      SELECT 
        cat_id,
        nav_cat_id,
        cat_name,
        slug,
        cat_description,
        display_order,
        is_active
      FROM categories
      WHERE nav_cat_id = ? AND softDelete = 1
      ORDER BY display_order ASC, cat_name ASC
      `,
      [nav_cat_id],
    );

    return res.status(200).json({
      message: "Categories retrieved successfully",
      data: categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = listCategories;
