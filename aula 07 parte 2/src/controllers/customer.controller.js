const customerService = require('../service/customer.service')

const create = ((req, res) => {
    customerService.createCustomer(req.body)
    res.send('Created sucessfully!!!')
})

const getAll = (req, res) => {
    res.send(customerService.getAllCustomer())
}

const updateCustomer = ((req, res) => {
    customerService.updateCustomer(req.params.id, req.body)
    res.send('Update sucessfully!!!')
})

const remove = ((req, res) => {
    customerService.remove(req.params.id)
    res.send('Deleted sucessfully!!!')
})

module.exports = {
    getAll,
    create,
    updateCustomer,
    remove
}
