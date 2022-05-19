const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema(
	{
		category: { type: String, required: true },
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model('category', categorySchema);
