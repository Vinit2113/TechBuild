const { poolConn } = require("../../db/dbConfig");

const addAddress = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      full_address,
      city,
      state,
      postal_code,
      country,
      is_default,
    } = req.body;

    const user_id = req.user.id;

    // Validation
    if (
      !user_id ||
      !first_name ||
      !full_address ||
      !city ||
      !state ||
      !postal_code
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    // If default → remove previous default
    if (is_default) {
      await poolConn.execute(
        "UPDATE user_addresses SET is_default = FALSE WHERE user_id = ?",
        [user_id],
      );
    }

    // Insert query
    const insertUserAddress = `
            INSERT INTO user_addresses 
            (user_id, first_name, last_name, full_address, city, state, postal_code, country, is_default) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

    const [result] = await poolConn.execute(insertUserAddress, [
      user_id,
      first_name,
      last_name || null,
      full_address,
      city,
      state,
      postal_code,
      country || "India",
      is_default || false,
    ]);

    return res.status(201).json({
      success: true,
      message: "Address added successfully",
      address_id: result.insertId,
    });
  } catch (error) {
    console.error("Error inserting address:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  addAddress,
};
