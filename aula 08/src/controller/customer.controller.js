const customerService = require('../service/customer.service')

const listAll = (req, res) => {
    return customerService.listAll()
}

const save = (req, res) => {
    return customerService.save()
}


const update = (erq, res) => {
    customerService.update()
}


const remove = (req, res) => {
    customerService.remove()
}

module.exports = {
    listAll,
    save,
    update,
    remove
}