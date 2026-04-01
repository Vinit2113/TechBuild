const productTableQuery = `
CREATE TABLE IF NOT EXISTS products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,

    -- Relationships
    sub_category_id INT NOT NULL,
    category_id INT NOT NULL,
    brand_id INT,

    -- Product information
    product_name VARCHAR(255) NOT NULL,
    model VARCHAR(100),
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    sku VARCHAR(50),
    warranty_months INT,

    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Foreign keys
    FOREIGN KEY (sub_category_id) REFERENCES sub_categories(sub_category_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (brand_id) REFERENCES brands(brand_id)
);`;
module.exports = { productTableQuery };
