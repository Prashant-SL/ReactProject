const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
	{
		id: { type: String, required: true },
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
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model('products', productsSchema);
