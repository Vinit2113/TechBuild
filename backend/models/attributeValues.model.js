const attributeValueTableQuery = `

CREATE TABLE IF NOT EXISTS attribute_values (
    value_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    attribute_id INT UNSIGNED NOT NULL,
    value VARCHAR(255) NOT NULL,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    -- Soft delete
    deleted_at TIMESTAMP NULL DEFAULT NULL,
    
    PRIMARY KEY (value_id),
    CONSTRAINT fk_attribute_values_attribute FOREIGN KEY (attribute_id)
        REFERENCES attributes (attribute_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
)
`;

module.exports = attributeValueTableQuery;
