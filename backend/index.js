const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const userRoutes = require("./routes/user.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }),
);



app.use("/user/", userRoutes);

app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON PORT ${port}`);
});
