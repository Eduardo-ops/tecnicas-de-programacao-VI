const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

router.post('', productController.createProduct)
router.get('', productController.getAllProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.removeProduct)

module.exports = router