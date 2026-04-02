const mysql = require("mysql2/promise");
const userTableQuery = require("../models/user.model");
const navCategoriesTableQuery = require("../models/navCategories.model");
const categoryTableQuery = require("../models/category.model");
const brandTableQuery = require("../models/brand.model");
const { productTableQuery } = require("../models/products.model");
const { productImageTableQuery } = require("../models/product_image");

require("dotenv").config();

const poolConn = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
  waitForConnections: true,
});

const tables = [
  userTableQuery,
  navCategoriesTableQuery,
  categoryTableQuery,
  brandTableQuery,
  productTableQuery,
  productImageTableQuery,
];
(async () => {
  try {
    for (const table of tables) {
      await poolConn.execute(table);
    }
    // const conn = await poolConn.getConnection();
    console.log("Database connected and tables created successfully.");

    // conn.release();
  } catch (error) {
    console.log("Database connection error: ", error);
  }
})();

module.exports = {
  poolConn,
};
