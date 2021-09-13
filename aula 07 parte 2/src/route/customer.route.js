const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customer.controller')

router.post('', customerController.create)
router.get('', customerController.getAll)
router.put('/:id', customerController.updateCustomer)
router.delete('/:id', customerController.remove)

module.exports = router