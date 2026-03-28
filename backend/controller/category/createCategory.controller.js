const { poolConn } = require("../../db/dbConfig");

// Utility: validate category name format
const isValidCategoryName = (categoryName) => categoryName.trim().length > 0;

const createCategory = async (req, res) => {
  try {
    // 🔹 Get nav_cat_id from URL parameters
    const { nav_cat_id } = req.params; // nav_cat_id comes from URL parameters
    const { category_name, description } = req.body;

    // 🔹 INPUT VALIDATION
    if (!category_name || !isValidCategoryName(category_name)) {
      return res.status(400).json({ message: "Category name is required!" });
    }

    // 🔹 CHECK IF nav_cat_id EXISTS
    const [existingCategory] = await poolConn.execute(
      `SELECT nav_cat_id FROM nav_categories WHERE nav_cat_id = ?`,
      [nav_cat_id],
    );

    if (existingCategory.length === 0) {
      return res
        .status(404)
        .json({ message: "Navigation category not found!" });
    }

    // 🔹 INSERT CATEGORY
    const [result] = await poolConn.execute(
      `
      INSERT INTO categories 
      (nav_cat_id, category_name, description) 
      VALUES (?, ?, ?)
      `,
      [nav_cat_id, category_name.trim(), description || null],
    );

    // 🔹 RESPONSE
    return res.status(201).json({
      message: "Category created successfully",
      data: {
        category_id: result.insertId,
        nav_cat_id,
        category_name: category_name.trim(),
        description: description || null,
      },
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = createCategory;
