const { poolConn } = require("../../db/dbConfig");

const insertProductSpecification = async (req, res) => {
  try {
    const { spec_group, spec_name, spec_value } = req.body;
    const product_id = req.params.product_id;

    // Validation
    if (!product_id || !spec_name) {
      return res.status(400).json({
        message: "product_id and spec_name are required",
      });
    }

    const sql = `
      INSERT INTO product_specifications
      (product_id, spec_group, spec_name, spec_value)
      VALUES (?, ?, ?, ?)
    `;

    const [result] = await poolConn.execute(sql, [
      product_id,
      spec_group || null,
      spec_name,
      spec_value || null,
    ]);

    return res.status(201).json({
      message: "Product specification inserted",
      spec_id: result.insertId,
    });
  } catch (error) {
    console.error("Insert Spec Error:", error);
    return res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};

module.exports = { insertProductSpecification };
