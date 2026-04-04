const attributeTableQuery = `
CREATE TABLE IF NOT EXISTS attributes (
    attribute_id INT  AUTO_INCREMENT PRIMARY KEY,
    attribute_name VARCHAR(100) NOT NULL UNIQUE,

    -- Optional grouping (e.g., "General", "Physical", etc.)
    attribute_group VARCHAR(100),

    -- Soft delete flag
    is_deleted TINYINT(1) DEFAULT 0,

    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;
module.exports = attributeTableQuery;
