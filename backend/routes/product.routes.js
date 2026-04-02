const express = require("express");
const router = express.Router();

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const createProduct = require("../controller/products/insertProduct.controller");
const listProducts = require("../controller/products/listProduct.controller");
const getAllProductsWithImages = require("../controller/products/wholeProductList.controller");

// 🔹 CREATE
router.post("/insert", tokenVerification, isAdmin, createProduct);
router.get("/list", listProducts);
router.get("/all-list", getAllProductsWithImages);

module.exports = router;
