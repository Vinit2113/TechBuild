const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const userRoutes = require("./routes/user.routes");
const navCatRoutes = require("./routes/navCat.routes");
const catRoutes = require("./routes/cat.routes");
const brandRoutes = require("./routes/brand.routes");
const productRoutes = require("./routes/product.routes");
const productImgRoutes = require("./routes/productImage.routes");
const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use("/user/", userRoutes);
app.use("/nav-cat/", navCatRoutes);
app.use("/cat/", catRoutes);
app.use("/brand/", brandRoutes);
app.use("/product/", productRoutes);
app.use("/product-image/", productImgRoutes);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
