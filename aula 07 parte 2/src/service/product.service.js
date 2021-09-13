const productDataBase = []

const createProduct = product => {
    productDataBase.push(product)
}

const getAll = () => productDataBase

const updateProduct = (id, product) => {
    const productIndex = productDataBase.findIndex(
        product => product.id == id
    )

    if (productIndex > -1) {
        productDataBase[productIndex] = product
    }
}

const remove = productId => {
    const productIndex = productDataBase.findIndex(
        product => product.id == productId
    )

    if (productIndex > -1) {
        productDataBase.splice(productIndex, 1)
    }
}

module.exports = {
    createProduct,
    getAll,
    updateProduct,
    remove
}
