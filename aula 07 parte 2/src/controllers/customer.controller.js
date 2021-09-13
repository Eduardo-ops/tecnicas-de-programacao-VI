const create = ((req, res) => {
    res.send('Created sucessfully!!!')
})

const getAll = ((req, res) => {
    res.send('All customers!!!')
})

const updateCustomer = ((req, res) => {
    res.send('Update sucessfully!!!')
})

const remove = ((req, res) => {
    res.send('Deleted sucessfully!!!')
})

module.exports = {
    getAll,
    create,
    updateCustomer,
    remove
}
