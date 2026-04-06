const express = require("express");

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const { addToCart } = require("../controller/Cart/addCart.controller");
const { getProductList } = require("../controller/Cart/listCart.controller");

const router = express.Router();

router.post("/add/:product_id", tokenVerification, addToCart);
router.get("/show/", tokenVerification, getProductList);

module.exports = router;
