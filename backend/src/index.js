require("dotenv").config();
const express = require("express");
const connect = require("./configs/db");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const paymentRoutes = require("./payment");
const dummyController = require("./controllers/dummy.controller");
const userController = require("./controllers/user.controller");
const { register, login } = require("./controllers/auth.controllers");
var cartController = require("./controllers/cart.controller.js");
var productController = require("./controllers/products.controller.js");

app.use("/api/payment", paymentRoutes);
app.use("/users", userController);
app.use("/cart", cartController);
app.use("/products", productController);

// /register
app.post("/register", register);
// .login
app.post("/login", login);

app.use("/", dummyController);

const PORT = process.env.PORT || 2345;

app.listen(PORT, async () => {
  try {
    await connect();
    return `listening on port ${PORT}`;
  } catch (err) {
    return err.message;
  }
});
