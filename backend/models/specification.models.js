const specificationTableQuery = `
CREATE TABLE IF NOT EXISTS specifications (
    spec_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    spec_name VARCHAR(100),
    spec_value VARCHAR(100),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);`;

module.exports = { specificationTableQuery };
