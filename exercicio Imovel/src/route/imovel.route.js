const express = require('express')
const router = express.Router()
const imovelController = require('../controllers/imovel.controller')

router.post('/', imovelController.createImovel)
router.get('/', imovelController.getAllImovel)
router.put('/:id', imovelController.updateImovel)
router.delete('/:id', imovelController.deleteImovel)

module.exports = router