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

const Products = mongoose.model('products', productsSchema);

module.exports = Products;

//      "id":"",
// 		"brandname":"",
// 		"price":"",
// 		"color":"",
// 		"discount_price":"",
// 		"screensize":"",
// 		"hard_disik_size":"",
// 		"ram":"",
// 		"os":"",
// 		"card_discription":"",
// 		"summary":"",
// 		"images":["","","",""]
