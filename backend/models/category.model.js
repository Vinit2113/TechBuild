const categoryTableQuery = `
CREATE TABLE IF NOT EXISTS categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  nav_cat_id INT,  -- Foreign key to nav_categories table
  category_name VARCHAR(100),
  description TEXT,  -- Optional field to describe the category item (e.g., "Keyboard", "Router")
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  -- Consistent with other tables
  FOREIGN KEY (nav_cat_id) REFERENCES nav_categories(nav_cat_id)  -- Linking category to nav_categories
);
`;

module.exports = categoryTableQuery;
