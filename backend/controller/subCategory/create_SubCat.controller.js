const { poolConn } = require("../../db/dbConfig");

// Utility: validate subcategory name format
const isValidSubCategoryName = (subCategoryName) =>
  subCategoryName.trim().length > 0;

const createSubCategory = async (req, res) => {
  try {
    // Get category_id from URL parameters
    const { category_id } = req.params; // category_id comes from URL parameters
    const { sub_category_name, description } = req.body;

    // INPUT VALIDATION
    if (!sub_category_name || !isValidSubCategoryName(sub_category_name)) {
      return res.status(400).json({ message: "Subcategory name is required!" });
    }

    // CHECK IF category_id EXISTS
    const [existingCategory] = await poolConn.execute(
      `SELECT category_id FROM categories WHERE category_id = ?`,
      [category_id],
    );

    if (existingCategory.length === 0) {
      return res.status(404).json({ message: "Category not found!" });
    }

    // INSERT SUBCATEGORY
    const [result] = await poolConn.execute(
      `
      INSERT INTO techbuild.sub_categories 
      (category_id, sub_category_name, description) 
      VALUES (?, ?, ?)
      `,
      [category_id, sub_category_name.trim(), description || null],
    );

    // RESPONSE
    return res.status(201).json({
      message: "Subcategory created successfully",
      data: {
        sub_category_id: result.insertId,
        category_id,
        sub_category_name: sub_category_name.trim(),
        description: description || null,
      },
    });
  } catch (error) {
    console.error("Error creating subcategory:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = createSubCategory;
