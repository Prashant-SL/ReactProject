require("dotenv").config();
const mongoose = require("mongoose");
const URL = process.env.MONGODBURL;
module.exports = () => {
  return mongoose.connect(URL);
};
