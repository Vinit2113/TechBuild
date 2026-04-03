const { poolConn } = require("../../db/dbConfig");

// Create a new attribute
const createAttribute = async (req, res) => {
  try {
    const { attribute_name, attribute_group } = req.body;

    // Validation
    if (!attribute_name) {
      return res.status(400).json({
        success: false,
        message: "Attribute name is required",
      });
    }

    // Using db.execute for prepared statements

    const [result] = await poolConn.execute(
      ` INSERT INTO attributes (attribute_name, attribute_group)
            VALUES (?, ?)`,
      [attribute_name, attribute_group || null],
    );

    return res.status(201).json({
      success: true,
      message: "Attribute created successfully",
      data: {
        attribute_id: result.insertId,
        attribute_name,
        attribute_group,
      },
    });
  } catch (error) {
    // Handle duplicate entry (UNIQUE constraint)
    if (error.code === "ER_DUP_ENTRY") {
      return res.status(409).json({
        success: false,
        message: "Attribute already exists",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { createAttribute };
