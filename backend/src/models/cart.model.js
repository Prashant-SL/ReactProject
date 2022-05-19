const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema(
	{
		id: { type: Number, required: true },
		name: { type: String, required: true },
		price: { type: Number, required: true },
		color: { type: String },
		discount: { type: String, required: true },
		category: { type: String, required: true },
		description: { type: String, required: true },
		summary: { type: String, required: true },
		images: [{ type: String, required: true }],
	},
	{
		versionKey: false, // removed __v
		timestamps: true, // createdAt, updatedAt
	}
);

module.exports = mongoose.model('cartdata', cartSchema);
