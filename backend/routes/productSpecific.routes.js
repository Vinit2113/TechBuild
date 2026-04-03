const express = require("express");
const router = express.Router();

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const {
  insertProductSpecification,
} = require("../controller/productSpecs/createProductSpecification.controller");

// 🔹 CREATE
router.post(
  "/:product_id/insert",
  tokenVerification,
  isAdmin,
  insertProductSpecification,
);

module.exports = router;
