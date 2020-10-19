module.exports = async (req, res) => {
	const { models } = req;
	const products = await models.products.find();
	res.send({ products })
}
