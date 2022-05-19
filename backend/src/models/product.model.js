const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
	{
		id: { type: Number, required: true },
		name: { type: String, required: true },
		price: { type: Number, required: true },
		color: { type: String },
		category: { type: String, required: true },
		discount: { type: String, required: true },
		description: { type: String, required: true },
		summary: { type: String, required: true },
		images: [{ type: String, required: true }],
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model('product', productSchema);
