const createProduct = ((req, res) => {
    res.send('Created product sucessfully!!!')
})

const getAllProduct = ((req, res) => {
    res.send('All product !!!')
})

const updateProduct = ((req, res) => {
    res.send('Update product sucessfully!!!')
})

const removeProduct = ((req, res) => {
    res.send('Deleted product sucessfully!!!')
})

module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    removeProduct
}
