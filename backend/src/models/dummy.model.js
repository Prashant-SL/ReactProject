const mongoose = require("mongoose");

const dummySchema = new mongoose.Schema(
  { name: { type: String, required: true } },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("dummy", dummySchema);
