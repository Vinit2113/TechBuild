const { poolConn } = require("../../db/dbConfig");

const insertProductSpecification = async (req, res) => {
  try {
    const product_id = req.params.product_id;

    // Accept BOTH formats:
    // 1. { specifications: [...] }
    // 2. [ ... ]
    const specifications = Array.isArray(req.body)
      ? req.body
      : req.body.specifications;

    // Validation
    if (
      !product_id ||
      !Array.isArray(specifications) ||
      specifications.length === 0
    ) {
      return res.status(400).json({
        message: "product_id and specifications array are required",
      });
    }

    // Prepare bulk values
    const values = specifications.map((spec) => [
      product_id,
      spec.spec_group || null,
      spec.spec_name,
      spec.spec_value || null,
    ]);

    const sql = `
      INSERT INTO product_specifications
      (product_id, spec_group, spec_name, spec_value)
      VALUES ?
    `;

    await poolConn.query(sql, [values]);

    return res.status(201).json({
      message: "Specifications inserted successfully",
      count: specifications.length,
    });
  } catch (error) {
    console.error("Insert Spec Error:", error);
    return res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};

module.exports = { insertProductSpecification };
