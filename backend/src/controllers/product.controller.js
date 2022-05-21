const express = require('express');

const router = express.Router();

const Product = require('../models/product.model.js');

router.get('', async (req, res) => {
	try {
		const product = await Product.find().lean().exec();
		return res.send(product);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.post('', async (req, res) => {
	try {
		const product = await Product.create(req.body);
		return res.status(800).send(product);
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id).lean().exec();
		return res.send(product);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);
		return res.send(product);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;
