const { poolConn } = require("../../db/dbConfig");

/**
 * List all brands
 * GET /brands
 */
const listBrands = async (req, res) => {
  try {
    // 🔹 Fetch all brands
    const [brands] = await poolConn.execute(`SELECT * FROM brands`);

    // 🔹 Send response
    return res.status(200).json({
      status: "success",
      message: "Brands fetched successfully",
      data: brands,
    });
  } catch (error) {
    console.error("Error listing brands:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

module.exports = listBrands;
