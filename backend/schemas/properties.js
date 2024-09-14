const mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
	title: String,
	slug: String,
	description: String,
	price: Number,
	primaryText: String,
	secondaryText: String,
	location: {
		streetName: String,
		streetNumber: String,
		addressLine2: String,
		postalCode: String,
		city: String,
		province: String,
		country: String,
		longLat: [Number, Number],
	},
});

module.exports = propertySchema;
