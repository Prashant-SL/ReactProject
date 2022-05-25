require('dotenv').config();

const express = require('express');
const connect = require('./configs/db');

const cors = require('cors');

const userController = require('./controllers/user.controller');
const productsController = require('./controllers/products.controller');
const cartController = require('./controllers/cart.controller');

const { register, login } = require('./controllers/auth.controller');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', userController);
app.use('/register', register);
app.use('/login', login);

app.use('/products', productsController);
app.use('/cart', cartController);

let PORT = process.env.PORT || 2345;

app.listen(PORT, async () => {
	try {
		await connect();
		console.log(`listening on port ${PORT}`);
	} catch (error) {
		console.log(error.message);
	}
});
