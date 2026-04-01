const categoryTableQuery = `
CREATE TABLE IF NOT EXISTS categories (
    cat_id INT AUTO_INCREMENT PRIMARY KEY,
    nav_cat_id INT NOT NULL,
    cat_name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    cat_description TEXT,
    display_order INT DEFAULT 0,
    is_active TINYINT(1) DEFAULT 1,
    softDelete BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (nav_cat_id) REFERENCES nav_categories(nav_cat_id) ON DELETE CASCADE
);
`;

module.exports = categoryTableQuery;
