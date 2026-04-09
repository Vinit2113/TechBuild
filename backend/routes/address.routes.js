const express = require("express");

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const {
  addAddress,
} = require("../controller/user_Address/addAddress.controller");

const router = express.Router();

router.post("/add/", tokenVerification, addAddress);

module.exports = router;
