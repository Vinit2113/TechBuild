const subCatTableQuery = `
CREATE TABLE IF NOT EXISTS sub_categories (
  sub_category_id INT AUTO_INCREMENT PRIMARY KEY,  -- Renamed for consistency
  category_id INT,  -- Foreign key to categories table
  sub_category_name VARCHAR(100),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  -- Correct timestamp behavior
  FOREIGN KEY (category_id) REFERENCES categories(category_id)  -- Linking subcategory to categories
);`;
module.exports = subCatTableQuery;
