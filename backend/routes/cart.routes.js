const express = require("express");

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const { addToCart } = require("../controller/Cart/addCart.controller");
const { getProductList } = require("../controller/Cart/listCart.controller");
const { removeFromCart } = require("../controller/Cart/removeCart.controller");

const router = express.Router();

router.post("/add/:product_id", tokenVerification, addToCart);
router.get("/show/", tokenVerification, getProductList);
router.get("/remove/:product_id", tokenVerification, removeFromCart);

module.exports = router;
