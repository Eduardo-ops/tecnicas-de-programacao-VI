const customerDataBase = []

const createCustomer = customer => {
    customerDataBase.push(customer)
}

const getAllCustomer = () => customerDataBase

const updateCustomer = (id, customer) => {
    const customerIndex = customerDataBase.findIndex(
        customer => customer.id == id
    )

    if (customerIndex > -1) {
        customerDataBase[customerIndex] = customer
    }
}

const remove = customerId => {
    const customerIndex = customerDataBase.findIndex(
        customer => customer.id == customerId
    )

    if (customerIndex > -1) {
        customerDataBase.splice(customerIndex, 1)
    }
}

module.exports = {
    createCustomer,
    getAllCustomer,
    updateCustomer,
    remove
}