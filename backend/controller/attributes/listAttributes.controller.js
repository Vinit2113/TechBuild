const { poolConn } = require("../../db/dbConfig");

// List all attributes
const listAllAttributes = async (req, res) => {
  try {
    const [rows] = await poolConn.execute(
      `SELECT attribute_id, attribute_name, attribute_group 
       FROM attributes
       ORDER BY attribute_name ASC`,
    );

    return res.status(200).json({
      success: true,
      message: "Attributes retrieved successfully",
      data: rows,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { listAllAttributes };
