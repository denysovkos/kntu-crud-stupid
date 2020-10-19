const path = require('path');

const fastify = require('fastify')({
	logger: true
});

const createDBConnection = require("../db");
const productsHandler = require("./routeHandlers/products");

module.exports = async () => {
	const { models } = await createDBConnection();

	// CRUD OPERATOR
	fastify.register(require('fastify-autocrud'), {
		prefix: '/api/product',
		Collection: models.products,
		additionalRoute: []
	});

	// ROUTES
	fastify.get('/api/products',{
		preHandler: (request, reply, done) => {
			request.models = models;
			return done();
		}
	}, productsHandler);

	fastify.register(require('fastify-static'), {
		root: path.resolve(__dirname, "../..", 'public'),
		prefix: '/',
	});

	fastify.listen(3000, (err, address) => {
		if (err) {
			fastify.log.error(err)
			process.exit(1)
		}
		fastify.log.info(`server listening on ${address}`)
	})
}
