const { poolConn } = require("../../db/dbConfig");

// Create multiple product-attribute mappings
const createProductAttributeMapping = async (req, res) => {
  try {
    const mappingsArray = req.body;

    // Validation: must be a non-empty array
    if (!Array.isArray(mappingsArray) || mappingsArray.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body must be a non-empty array",
      });
    }

    // Validate each object
    for (const item of mappingsArray) {
      if (!item.product_id || !item.attribute_id || !item.attribute_value_id) {
        return res.status(400).json({
          success: false,
          message:
            "Each item must contain product_id, attribute_id, and attribute_value_id",
        });
      }
    }

    // Prepare bulk insert data
    const insertValues = mappingsArray.map((item) => [
      item.product_id,
      item.attribute_id,
      item.attribute_value_id,
    ]);

    // Flatten the values for placeholders
    const flattenedValues = insertValues.flat();

    // Create placeholders (?, ?, ?), (?, ?, ?), ...
    const placeholders = insertValues.map(() => "(?, ?, ?)").join(", ");

    // Bulk insert query
    const [result] = await poolConn.execute(
      `INSERT INTO product_attribute_map (product_id, attribute_id, attribute_value_id)
       VALUES ${placeholders}`,
      flattenedValues,
    );

    return res.status(201).json({
      success: true,
      message: "Product attribute mappings created successfully",
      insertedCount: result.affectedRows,
    });
  } catch (error) {
    console.log(error);

    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        success: false,
        message: "One or more product-attribute mappings already exist",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { createProductAttributeMapping };
