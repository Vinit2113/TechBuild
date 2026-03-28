const { poolConn } = require("../../db/dbConfig");

// Controller: List all subcategories across all categories
const listSubCategories = async (req, res) => {
  try {
    // QUERY: Get all subcategories
    const [subcategories] = await poolConn.execute(
      `SELECT sub_category_id, sub_category_name, description, category_id
       FROM techbuild.sub_categories`,
    );

    // CHECK: If no subcategories found
    if (subcategories.length === 0) {
      return res.status(404).json({ message: "No subcategories found!" });
    }

    // RESPONSE: Return the list of subcategories
    return res.status(200).json({
      message: "Subcategories fetched successfully",
      data: subcategories,
    });
  } catch (error) {
    console.error("Error fetching subcategories:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = listSubCategories;
