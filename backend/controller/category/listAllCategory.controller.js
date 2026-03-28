const { poolConn } = require("../../db/dbConfig");

const listAllCat = async (req, res) => {
  try {
    // 🔹 GET ALL CATEGORIES
    const [categories] = await poolConn.execute(
      `SELECT category_id, category_name, description FROM categories`,
    );

    if (categories.length === 0) {
      return res.status(404).json({ message: "No categories found!" });
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

module.exports = listAllCat;
