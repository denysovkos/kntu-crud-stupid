const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	name: String,
	price: Number,
	description: String,
	labels: [String],
	created: { type: Date, default: Date.now }
});

const productSchemaConstructor = (connector) => connector.model('products', productSchema);

module.exports = {
	productSchemaConstructor
}
