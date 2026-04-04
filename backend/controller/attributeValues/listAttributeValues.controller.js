// File: attributeValuesController.js
const { poolConn } = require("../../db/dbConfig");

// List all attribute values
const listAttributeValues = async (req, res) => {
  try {
    // Fetch all attribute values using the correct column name
    const [rows] = await poolConn.query(
      `SELECT attribute_value_id AS id, attribute_id, value
       FROM attribute_values
       ORDER BY attribute_id, attribute_value_id`,
    );

    // Group by attribute_id
    const grouped = rows.reduce((acc, curr) => {
      if (!acc[curr.attribute_id]) acc[curr.attribute_id] = [];
      acc[curr.attribute_id].push({ id: curr.id, value: curr.value });
      return acc;
    }, {});

    return res.status(200).json({
      success: true,
      data: grouped,
      total: rows.length,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { listAttributeValues };
