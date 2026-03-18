const express = require("express");
const registerUser = require("../controller/userRegister");
const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
