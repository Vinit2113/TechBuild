const express = require("express");

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const {
  createProductAttributeMapping,
} = require("../controller/productAttribute/productAttributeMapping.controller");


const router = express.Router();

router.post(
  "/map-connect/",
  tokenVerification,
  isAdmin,
  createProductAttributeMapping,
);


module.exports = router;
