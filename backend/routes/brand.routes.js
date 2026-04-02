const express = require("express");

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const createBrand = require("../controller/brands/createBrand.controller");
const listBrands = require("../controller/brands/listBrand.controller");

const router = express.Router();

router.post("/create", tokenVerification, isAdmin, createBrand);
router.get("/list", listBrands);

module.exports = router;
