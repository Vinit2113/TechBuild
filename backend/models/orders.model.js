const createOrderTableQuery = `
CREATE TABLE IF NOT EXISTS orders (
  order_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  discount DECIMAL(10,2) DEFAULT 0,
  shipping_cost DECIMAL(10,2) DEFAULT 0,
  tax DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2) NOT NULL,
  promo_code VARCHAR(50) DEFAULT NULL,
  payment_method ENUM('UPI','Card','COD') NOT NULL,
  payment_status ENUM('Pending','Paid','Failed') DEFAULT 'Pending',
  order_status ENUM('Processing','Shipped','Delivered','Cancelled') DEFAULT 'Processing',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (order_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);`;

module.exports = { createOrderTableQuery };
