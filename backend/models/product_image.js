const productImageTableQuery = `
CREATE TABLE IF NOT EXISTS product_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    image_url VARCHAR(255),
    type ENUM('thumbnail', 'main', 'video') DEFAULT 'thumbnail',
    sort_order INT DEFAULT 0,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);`;

module.exports = { productImageTableQuery };
