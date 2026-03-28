const express = require("express");
const registerUser = require("../controller/users/userRegister.controller");
const loginUser = require("../controller/users/userLogin.controller");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
