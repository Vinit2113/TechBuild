const cartTableQuery = `
CREATE TABLE IF NOT EXISTS  cart (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`;