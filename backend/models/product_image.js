const productImageTableQuery = `
CREATE TABLE IF NOT EXISTS product_media (
    media_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    media_type ENUM('image','video') NOT NULL DEFAULT 'image',
    media_url VARCHAR(255) NOT NULL,
    alt_text VARCHAR(500),
    is_main BOOLEAN DEFAULT FALSE,
    display_order INT DEFAULT 0,
    softDelete BOOLEAN DEFAULT FALSE,
    CONSTRAINT fk_product
        FOREIGN KEY (product_id)
        REFERENCES products(product_id)
        ON DELETE CASCADE,
    UNIQUE KEY unique_product_media (product_id, media_url)
);
`;

module.exports = { productImageTableQuery };
