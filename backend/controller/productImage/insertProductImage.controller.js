const { poolConn } = require("../../db/dbConfig");

const addProductImage = async (req, res) => {
  try {
    const { product_id, alt_text, is_main } = req.body;

    // 🔹 VALIDATION
    if (!product_id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    // 🔹 CHECK PRODUCT EXISTS
    const [product] = await poolConn.execute(
      `SELECT product_id FROM products WHERE product_id = ?`,
      [product_id],
    );

    if (product.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    // 🔹 OPTIONAL: Reset main image
    if (is_main) {
      await poolConn.execute(
        `UPDATE product_media SET is_main = 0 WHERE product_id = ?`,
        [product_id],
      );
    }

    const mediaData = [];

    req.files.forEach((file, index) => {
      const mediaType = file.mimetype.startsWith("video/") ? "video" : "image";

      const mediaUrl = `/uploads/products/${file.filename}`;

      mediaData.push([
        product_id,
        mediaType,
        mediaUrl,
        alt_text || null,
        is_main ? 1 : 0,
        index,
        0,
      ]);
    });

    // 🔹 INSERT DATA
    await poolConn.query(
      `INSERT INTO product_media
      (product_id, media_type, media_url, alt_text, is_main, display_order, softDelete)
      VALUES ?`,
      [mediaData],
    );

    return res.status(201).json({
      message: "Media uploaded successfully",
      data: mediaData.map((item) => ({
        product_id: item[0],
        media_type: item[1],
        media_url: item[2],
      })),
    });
  } catch (error) {
    console.error("Upload Error:", error);

    return res.status(500).json({
      message: "INTERNAL SERVER ERROR",
    });
  }
};

module.exports = addProductImage;
