const express = require("express")
const router = express.Router()

const productsController = require("../controllers/products.controller")

router.get("/", productsController.getAllProducts)

router.get("/:productId", productsController.getSingleProduct)

router.post("/:productId", productsController.createProduct)

router.put("/:productId", productsController.updateProduct)

router.delete("/:productId", productsController.deleteProduct)

module.exports = router
