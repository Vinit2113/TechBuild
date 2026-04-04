const express = require("express");
const router = express.Router();

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const {
  createAttribute,
} = require("../controller/attributes/insertAttributes.controller");
const {
  listAllAttributes,
} = require("../controller/attributes/listAttributes.controller");

// 🔹 CREATE
router.post("/add", tokenVerification, isAdmin, createAttribute);

router.get("/list", listAllAttributes);

module.exports = router;
