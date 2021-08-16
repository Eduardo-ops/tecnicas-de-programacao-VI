const fs = require('fs')

const fileName = fs.readFileSync = 'C:/Users/eduar/Documents/faculdade/VI - semestre/tecnicas de programacao VI/files/chamada.txt'


const contentFile = fs.readFileSync(fileName, 'utf-8')

console.log('Lendo arquivo: ${fileName}')
console.log(contentFile)