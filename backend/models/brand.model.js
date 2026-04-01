const brandTableQuery = `
CREATE TABLE IF NOT EXISTS brands (
  brand_id INT AUTO_INCREMENT PRIMARY KEY,
  brand_name VARCHAR(100) NOT NULL,   -- e.g., "Intel", "AMD"
  logo_url VARCHAR(255),              -- optional brand logo
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;

module.exports = brandTableQuery;
