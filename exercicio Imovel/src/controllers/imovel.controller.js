const imovelService = require('../service/imovel.service')

const createImovel = ((req, res) => {
    imovelService.createImovel(req.body)
    res.send('Cadastrado com sucesso!')
})

const getAllImovel = (req, res) => {
    res.send(imovelService.getAllImovel())
}

const updateImovel = ((req, res) => {
    imovelService.updateImovel(req.params.id, req.body)
    res.send('Alterado com sucesso!')
})

const deleteImovel = ((req, res) => {
    imovelService.deleteImovel(req.params.id)
    res.send('Deletado com sucesso!')
})

module.exports = {
    createImovel, 
    getAllImovel,
    updateImovel,
    deleteImovel
}