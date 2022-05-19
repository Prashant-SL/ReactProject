const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use(cors());
const connect = () => {
	return mongoose.connect('mongodb://localhost:27017/revisionproject');
};

var cartController = require('./controllers/cart.controller.js');
var productController = require('./controllers/product.controller.js');

app.use('/cart', cartController);
app.use('/products', productController);

app.listen(8080, async () => {
	try {
		await connect();
		console.log('Listening on port 8080');
	} catch (err) {
		console.log(err.message);
	}
});
