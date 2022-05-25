const express = require('express');
const router = express.Router();

const cartProducts = require('../models/cart.model');

router.get('', async (req, res) => {
	try {
		const cartproducts = await cartProducts.find().lean().exec();
		return res.send(cartproducts);
	} catch (eroor) {
		return res.status(500).send(cartproducts);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const cartproducts = await cartProducts.findByIdAndDelete(req.params.id);
		return res.send(cartproducts);
	} catch (eroor) {
		return res.status(500).send(cartproducts);
	}
});

router.post('', async (req, res) => {
	try {
		const cartproduct = await cartProducts.create(req.body);
		return res.send(cartproduct);
	} catch (eroor) {
		return res.status(500).send(eroor.message);
	}
});

module.exports = router;
