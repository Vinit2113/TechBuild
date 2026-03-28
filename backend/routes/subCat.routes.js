const express = require("express");

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const createCategory = require("../controller/category/createCategory.controller");
const createSubCategory = require("../controller/subCategory/create_SubCat.controller");
const listSubCategories = require("../controller/subCategory/listSubCat.controller");

const router = express.Router();

router.post(
  "/:category_id/create",
  tokenVerification,
  isAdmin,
  createSubCategory,
);

router.get("/list", listSubCategories);

module.exports = router;
