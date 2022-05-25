require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

let newToken = (user) => {
	return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
	try {
		let user = await User.findOne({ email: req.body.email }).lean().exec();

		if (user) {
			return res.status(400).send({ message: 'Plaese try naother email' });
		}

		user = await User.create(req.body);

		const token = newToken(user);

		res.send({ user, token });
	} catch (error) {
		return res.status(400).send(error.message);
	}
};

const login = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (!user) return res.status(400).send({ message: 'User Not Found' });

		const match = user.checkPassword(req.body.password);

		if (!match) return res.status(400).send({ message: 'Wrong email or password' });

		const token = newToken(user);

		console.log(user);
		res.send({ user, token });
	} catch (err) {
		res.status(500).send(err.message);
	}
};

module.exports = { register, login };
