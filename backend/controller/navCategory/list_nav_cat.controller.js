const { poolConn } = require("../../db/dbConfig");

// List all navigation categories
const listNavCategories = async (req, res) => {
  try {
    const { is_active } = req.query;
    let query = `
      SELECT nav_cat_id, nav_cat_name, slug, nav_cat_icon, 
             nav_cat_display_order, is_active 
      FROM nav_categories
    `;
    const params = [];

    if (is_active === "true" || is_active === "false") {
      query += " WHERE is_active = ?";
      params.push(is_active === "true" ? 1 : 0);
    }

    query += " ORDER BY nav_cat_display_order ASC, nav_cat_name ASC";

    const [rows] = await poolConn.execute(query, params);

    return res.status(200).json({
      message: "Navigation categories retrieved successfully",
      data: rows,
    });
  } catch (error) {
    console.error("Error listing nav categories:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = listNavCategories;
