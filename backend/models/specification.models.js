const specificationTableQuery = `
CREATE TABLE IF NOT EXISTS product_specs (
  spec_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,            -- Link to products
  spec_name VARCHAR(100) NOT NULL,    -- e.g., "Total Cores", "Max Turbo Frequency"
  spec_value VARCHAR(100) NOT NULL,   -- e.g., "24 (8P + 16E)", "5.80 GHz"
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
);`;

module.exports = { specificationTableQuery };
