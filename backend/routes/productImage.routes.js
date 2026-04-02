const express = require("express");
const router = express.Router();

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const addProductMedia = require("../controller/productImage/insertProductImage.controller");
const upload = require("../middleware/upload");


// 🔹 CREATE
router.post(
  "/insert",
  tokenVerification,
  isAdmin,
  upload.array("media", 10),
  addProductMedia,
);

module.exports = router;
