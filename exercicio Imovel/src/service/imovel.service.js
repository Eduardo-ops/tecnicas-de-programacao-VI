const imovelDB = []

const createImovel = imovel => {
    imovelDB.push(imovel)
}

const getAllImovel = () => imovelDB

const updateImovel = (id, imovel) => {
    const imovelIndex = imovelDB.findIndex(
        imovel => imovel.id == id
    )
    if (imovelIndex != -1) {
        imovelDB[imovelIndex] = imovel
    }
}

const deleteImovel = imovelId => {
    const imovelIndex = imovelDB.findIndex(
        imovel => imovel.id == imovelId
    )
    if (imovelIndex != -1) {
        imovelDB.splice(imovelIndex, 1)
    }
}

module.exports = {
    createImovel,
    getAllImovel,
    updateImovel,
    deleteImovel
}