const { poolConn } = require("../../db/dbConfig");

const listNavCategories = async (req, res) => {
  try {
    // 🔹 FETCH CATEGORIES ORDERED BY DISPLAY ORDER
    const [rows] = await poolConn.execute(
      `SELECT * FROM nav_categories ORDER BY nav_cat_display_order ASC`,
    );

    // 🔹 CHECK IF EMPTY
    if (rows.length === 0) {
      return res.status(200).json({
        message: "No navigation categories found.",
        data: [],
      });
    }

    // 🔹 RESPONSE
    return res.status(200).json({
      message: "Nav categories retrieved successfully",
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error("Error fetching nav categories:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = listNavCategories;
