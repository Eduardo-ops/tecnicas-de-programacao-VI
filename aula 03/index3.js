const fs = require('fs')
const { memoryUsage } = require('process')
const readLIne = require('readLine')

const fileName = 'C:/Users/eduar/Documents/faculdade/VI - semestre/tecnicas de programacao VI/files'

const readInterface = readLine.createInterface({
    input: fs.createReadStream(fileName)
})

readInterface.on('line', line => {
    console.log('Estou lendo uma linha nova:')
    console.log(line)
})

/*
Criar um arquivo novo (index4.js)
esse arquivo deve subir um servidor
ao invez de responder hello word, vocês
devem responder com um arquivo html!
criar também uma pasta dentro da pasta raiz chamada
html
criar um arquivo index.html dentro da mesma colocar um conteudo html bem básico.
*/
