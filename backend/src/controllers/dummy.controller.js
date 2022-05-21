const express = require("express");
const Dummy = require("../models/dummy.model");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const users = await Dummy.find().lean().exec();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("", async (req, res) => {
  try {
    const user = await Dummy.create(req.body);
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
