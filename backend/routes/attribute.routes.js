const express = require("express");
const router = express.Router();

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const { createAttribute } = require("../controller/attributes/insertAttributes.controller");


// 🔹 CREATE
router.post(
  "/add",
  tokenVerification,
  isAdmin,
  createAttribute,
);

module.exports = router;
