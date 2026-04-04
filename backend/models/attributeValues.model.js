const attributeValueTableQuery = `

CREATE TABLE IF NOT EXISTS attribute_values (
    attribute_value_id INT  NOT NULL AUTO_INCREMENT,
    attribute_id INT  NOT NULL,
    value VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (attribute_value_id),
    FOREIGN KEY (attribute_id) REFERENCES attributes(attribute_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
`;

module.exports = attributeValueTableQuery;
