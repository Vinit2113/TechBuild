const product_specification_table_query = `
CREATE TABLE IF NOT EXISTS product_specifications (
    spec_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    spec_group VARCHAR(100),
    spec_name VARCHAR(150) NOT NULL,
    spec_value TEXT,
    
    -- Soft delete column
    is_deleted TINYINT(1) DEFAULT 0,
    
    -- Optional timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Foreign key constraint
    CONSTRAINT fk_product_specifications_product
        FOREIGN KEY (product_id) REFERENCES products(product_id)
        ON DELETE CASCADE
);`;

module.exports = product_specification_table_query;
