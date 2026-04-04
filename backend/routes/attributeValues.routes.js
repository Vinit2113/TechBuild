const express = require("express");

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const createBrand = require("../controller/brands/createBrand.controller");
const listBrands = require("../controller/brands/listBrand.controller");
const {
  createAttributeValue,
} = require("../controller/attributeValues/insertAttributeValues.controller");
const {
  listAttributeValues,
} = require("../controller/attributeValues/listAttributeValues.controller");

const router = express.Router();

router.post("/insert/", tokenVerification, isAdmin, createAttributeValue);

router.get(
  "/list-attribute-value/",
  tokenVerification,
  isAdmin,
  listAttributeValues,
);

module.exports = router;
