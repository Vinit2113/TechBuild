const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const path = require("path");
const userRoutes = require("./routes/user.routes");
const navCatRoutes = require("./routes/navCat.routes");
const catRoutes = require("./routes/cat.routes");
const brandRoutes = require("./routes/brand.routes");
const productRoutes = require("./routes/product.routes");
const productImgRoutes = require("./routes/productImage.routes");
const productSpecsRoutes = require("./routes/productSpecific.routes");
const productAttributeRoutes = require("./routes/attribute.routes");
const productAttributeVauesRoutes = require("./routes/attributeValues.routes");
const productAttributeMappingRoutes = require("./routes/productAttributeMapping.routes");

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
app.use("/product-specs/", productSpecsRoutes);
app.use("/product-attribute/", productAttributeRoutes);
app.use("/product-attribute-values/", productAttributeVauesRoutes);
app.use("/product-attribute-mapping/", productAttributeMappingRoutes);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
