const productAttributeMapping = `
CREATE TABLE IF NOT EXISTS product_attribute_map (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    attribute_id INT NOT NULL,
    attribute_value_id INT NOT NULL,

    -- Soft delete
    is_deleted TINYINT(1) DEFAULT 0,

    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    -- Foreign Keys (without constraint names)
    FOREIGN KEY (product_id) 
        REFERENCES techbuild.products(product_id)
        ON UPDATE CASCADE,

    FOREIGN KEY (attribute_id) 
        REFERENCES attributes(attribute_id)
        ON UPDATE CASCADE,

    FOREIGN KEY (attribute_value_id) 
        REFERENCES attribute_values(attribute_attribute_value_id)
        ON UPDATE CASCADE,

    -- Prevent duplicates
    UNIQUE KEY unique_product_attribute (product_id, attribute_id, attribute_value_id)
);
`;

module.exports = productAttributeMapping;
