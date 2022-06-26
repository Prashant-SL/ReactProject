const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema(
	{
		brandname: { type: String, required: true },
		price: { type: String, required: true },
		color: { type: String },
		discount_price: { type: String },
		screensize: { type: String },
		hard_disk_size: { type: String },
		ram: { type: String },
		os: { type: String },
		card_description: { type: String },
		summary: { type: String, required: true },
		images: [{ type: String, required: true }],
	},
	{
		versionKey: false, // removed __v
		timestamps: true, // createdAt, updatedAt
	}
);

module.exports = mongoose.model('cartdata', cartSchema);
