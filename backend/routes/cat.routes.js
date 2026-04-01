const express = require("express");

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const createCategory = require("../controller/category/createCategory.controller");
const listCategories = require("../controller/category/listCategory.controller");


const router = express.Router();

router.post("/:nav_cat_id/create", tokenVerification, isAdmin, createCategory);
router.get("/:nav_cat_id/list", listCategories);


module.exports = router;
