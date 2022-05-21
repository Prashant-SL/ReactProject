const express = require('express');

const router = express.Router();

const Category = require('../models/category.model.js');

router.get('', async (req, res) => {
	try {
		const categories = await Category.find().lean().exec();
		return res.send(categories);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.post('', async (req, res) => {
	try {
		const categories = await Category.create(req.body);
		return res.status(800).send(categories);
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const categories = await Category.findById(req.params.id).lean().exec();
		return res.send(categories);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;
