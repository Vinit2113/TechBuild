const { poolConn } = require("../../db/dbConfig");

// Create multiple attribute values
const createAttributeValue = async (req, res) => {
  try {
    const valuesArray = req.body;

    // Validation: must be array
    if (!Array.isArray(valuesArray) || valuesArray.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body must be a non-empty array",
      });
    }

    // Validate each object
    for (const item of valuesArray) {
      if (!item.attribute_id || !item.value) {
        return res.status(400).json({
          success: false,
          message: "Each item must contain attribute_id and value",
        });
      }
    }

    // Prepare bulk insert data
    const insertValues = valuesArray.map((item) => [
      item.attribute_id,
      item.value,
    ]);

    // Bulk insert query
    const [result] = await poolConn.query(
      `INSERT INTO attribute_values (attribute_id, value)
       VALUES ?`,
      [insertValues],
    );

    return res.status(201).json({
      success: true,
      message: "Attribute values created successfully",
      insertedCount: result.affectedRows,
    });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        success: false,
        message: "One or more attribute values already exist",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { createAttributeValue };
