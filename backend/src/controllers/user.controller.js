const express = require('express');

const router = express.Router();

const User = require('../models/user.model.js');

router.get('', async (req, res) => {
	try {
		const users = await User.find().lean().exec();
		return res.send(users);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const users = await User.findByIdAndDelete(req.params.id).lean().exec();
		return res.send(users);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.post('', async (req, res) => {
	try {
		const users = await User.create(req.body);
		return res.status(800).send(users);
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const users = await User.findById(req.params.id).lean().exec();
		return res.send(users);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;
