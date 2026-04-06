const cartTableQuery = `
CREATE TABLE IF NOT EXISTS cart_items (
  cart_id INT NOT NULL AUTO_INCREMENT,
  id INT NOT NULL, -- must match users.id
  product_id INT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  is_deleted TINYINT(1) NOT NULL DEFAULT 0,
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (cart_id),
  UNIQUE KEY unique_cart_item (id, product_id),
  FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);
`;

module.exports = cartTableQuery;
