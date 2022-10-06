const db = require("../../database/db")

const getAllProducts = async function (_, res) {
	const products = await db.any("select * from products")
	if (!products) throw new Error("error during get all products")
	res.status(200).json(products)
}

const getSingleProduct = async function (productId) {
	const product = await db.any("select * from products where id = $1", productId)
	if (!product) throw new Error("error during get 1 product")
	res.status(200).json(product)
}

const createProduct = async function ({ name, company, rating }) {
	await db.any("insert into products(name, company, rating) values($1,$2,$3)", [
		name,
		company,
		rating,
	])
}

const deleteProduct = async function (productId) {
	await db.any("delete from products where id = $1", productId)
}

module.exports = {
	getAllProducts,
	getSingleProduct,
	createProduct,
	updateProduct,
	deleteProduct,
}
