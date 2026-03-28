const navCategoriesTableQuery = `
CREATE TABLE IF NOT EXISTS nav_categories (
  nav_cat_id INT AUTO_INCREMENT PRIMARY KEY,
  nav_cat_name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  nav_cat_icon VARCHAR(100),
  nav_cat_display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
`;
module.exports = navCategoriesTableQuery;

// display_order is a number that tells your app in what order to show the categories.
// DISPLAY_ORDER : IT's  like priority
