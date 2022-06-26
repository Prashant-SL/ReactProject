const express = require('express');
const router = express.Router();
const Cart = require('../models/cart.model.js');

router.get('', async (req, res) => {
	try {
		const carts = await Cart.find().lean().exec();
		return res.send(carts);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.post('', async (req, res) => {
	try {
		const carts = await Cart.create(req.body);
		return res.status(800).send(carts);
	} catch (err) {
		return res.send(err.message);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const carts = await Cart.findById(req.params.id).lean().exec();
		return res.send(carts);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const carts = await Cart.findByIdAndDelete(req.params.id);
		return res.send(carts);
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

module.exports = router;
