const mongoose = require('mongoose');

const { productSchemaConstructor } = require("./models/product");

const connect = async () => {
	const url = 'mongodb+srv://db_user:db_pass_7777@cluster0.se5pt.gcp.mongodb.net/products?retryWrites=true&w=majority';
	const mongooseConnection = await mongoose.createConnection(url, { useNewUrlParser: true, useUnifiedTopology: true });

	productSchemaConstructor(mongooseConnection);

	return mongooseConnection;
};

module.exports = connect;
