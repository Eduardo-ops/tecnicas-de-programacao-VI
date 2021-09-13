const productService = require('../service/product.service')

const createProduct = (req, res) => {
    productService.createProduct(req.body)
    res.send('Created product sucessfully!!!')
}

const getAllProduct = (req, res) => {
    res.send(productService.getAll())
}

const updateProduct = (req, res) => {
    productService.updateProduct(req.params.id, req.body)
    res.send('Update product sucessfully!!!')
}

const removeProduct = (req, res) => {
    productService.remove(req.params.id)
    res.send('Deleted product sucessfully!!!')
}

module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    removeProduct
}
