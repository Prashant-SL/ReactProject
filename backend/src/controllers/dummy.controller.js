const express = require('express');
const Dummy = require('../models/dummy.model');
const router = express.Router();

router.post('', async (req, res) => {
	try {
		const dummy = await Dummy.create(req.body);
		return res.status(201).send(dummy);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.get('', async (req, res) => {
	try {
		const dummy = await Dummy.find().lean().exec();
		return res.status(200).send(dummy);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;
