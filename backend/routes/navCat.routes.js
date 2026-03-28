const express = require("express");
const createNavCategory = require("../controller/navCategory/create_nav_cat.controller");
const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const listNavCategories = require("../controller/navCategory/list_nav_cat.controller");

const router = express.Router();

router.post("/create", tokenVerification, isAdmin, createNavCategory);
router.get("/list", listNavCategories);

module.exports = router;
