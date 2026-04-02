const { poolConn } = require("../../db/dbConfig");

const listAllCategories = async (req, res) => {
  try {
    // 🔹 FETCH ALL CATEGORIES (no nav_cat_id filter)
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
      WHERE softDelete = 1
      ORDER BY display_order ASC, cat_name ASC
      `,
    );

    return res.status(200).json({
      message: "All categories retrieved successfully",
      data: categories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = listAllCategories;
