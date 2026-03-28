const { poolConn } = require("../../db/dbConfig");

const listCategories = async (req, res) => {
  try {
    // 🔹 Get nav_cat_id from URL parameters
    const { nav_cat_id } = req.params; // nav_cat_id comes from URL parameters

    // 🔹 VALIDATE nav_cat_id
    if (!nav_cat_id || isNaN(nav_cat_id)) {
      return res
        .status(400)
        .json({ message: "Invalid navigation category ID!" });
    }

    // 🔹 CHECK IF nav_cat_id EXISTS
    const [existingNavCat] = await poolConn.execute(
      `SELECT nav_cat_id FROM nav_categories WHERE nav_cat_id = ?`,
      [nav_cat_id],
    );

    if (existingNavCat.length === 0) {
      return res
        .status(404)
        .json({ message: "Navigation category not found!" });
    }

    // 🔹 GET CATEGORIES FOR THE SPECIFIED nav_cat_id
    const [categories] = await poolConn.execute(
      `SELECT category_id, category_name, description FROM categories WHERE nav_cat_id = ?`,
      [nav_cat_id],
    );

    if (categories.length === 0) {
      return res
        .status(404)
        .json({ message: "No categories found for this navigation category!" });
    }

    // 🔹 RESPONSE
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
