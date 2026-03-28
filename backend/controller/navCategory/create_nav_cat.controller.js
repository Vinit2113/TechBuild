const { poolConn } = require("../../db/dbConfig");

// Utility: validate slug format
const isValidSlug = (slug) => /^[a-z0-9-]+$/.test(slug);

const createNavCategory = async (req, res) => {
  try {
    const {
      nav_cat_name,
      slug,
      nav_cat_icon,
      nav_cat_display_order,
      is_active,
    } = req.body;

    // 🔹 INPUT VALIDATION
    if (!nav_cat_name || nav_cat_name.trim() === "") {
      return res.status(400).json({ message: "Category name is required!" });
    }

    if (slug && !isValidSlug(slug)) {
      return res
        .status(400)
        .json({
          message:
            "Slug must contain only lowercase letters, numbers, and hyphens.",
        });
    }

    // 🔹 CHECK IF SLUG ALREADY EXISTS
    if (slug) {
      const [existingSlug] = await poolConn.execute(
        `SELECT nav_cat_id FROM nav_categories WHERE slug = ?`,
        [slug],
      );

      if (existingSlug.length > 0) {
        return res.status(409).json({
          message: "Slug already exists. Try a different one!",
        });
      }
    }

    // 🔹 INSERT CATEGORY
    const [result] = await poolConn.execute(
      `
      INSERT INTO nav_categories 
      (nav_cat_name, slug, nav_cat_icon, nav_cat_display_order, is_active) 
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        nav_cat_name.trim(),
        slug || null,
        nav_cat_icon || null,
        nav_cat_display_order ?? 0,
        is_active !== undefined ? (is_active ? 1 : 0) : 1, // MySQL boolean as 1/0
      ],
    );

    // 🔹 RESPONSE
    return res.status(201).json({
      message: "Nav category created successfully",
      data: {
        nav_cat_id: result.insertId,
        nav_cat_name: nav_cat_name.trim(),
        slug: slug || null,
        nav_cat_icon: nav_cat_icon || null,
        nav_cat_display_order: nav_cat_display_order ?? 0,
        is_active: is_active !== undefined ? !!is_active : true,
      },
    });
  } catch (error) {
    console.error("Error creating nav category:", error);
    return res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

module.exports = createNavCategory;
