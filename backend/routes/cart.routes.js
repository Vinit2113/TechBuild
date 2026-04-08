const express = require("express");

const tokenVerification = require("../middleware/tokenVerification");
const isAdmin = require("../middleware/adminOnly");
const {
  addToCart,
  updateCartQuantity,
} = require("../controller/Cart/addCart.controller");
const { getProductList } = require("../controller/Cart/listCart.controller");
const { removeFromCart } = require("../controller/Cart/removeCart.controller");

const router = express.Router();

router.post("/add/:product_id", tokenVerification, addToCart);
router.get("/show/", tokenVerification, getProductList);
router.delete("/remove/:product_id", tokenVerification, removeFromCart);
router.put("/update/:product_id", tokenVerification, updateCartQuantity);

module.exports = router;
