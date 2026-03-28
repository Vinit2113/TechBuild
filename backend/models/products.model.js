const productTableQuery = `
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(100),
    series VARCHAR(100),
    category VARCHAR(100),        -- e.g., CPU, GPU, Motherboard
    generation VARCHAR(50),
    description TEXT,
    price DECIMAL(10,2),
    stock INT DEFAULT 0,
    rating DECIMAL(3,2) DEFAULT 0,
    review_count INT DEFAULT 0,
    main_image VARCHAR(255),      -- URL or path to main image
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);`;
module.exports = { productTableQuery };
