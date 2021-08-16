const fs = require('fs')

const fileName = 'C:\Users\eduar\Documents\faculdade\VI - semestre\tecnicas de programacao VI\files'

fs.readFileSync(fileName, 'utf-8')
    .split(/\n/)
    .forEach(line => {
        console.log('Estou em uma nova linha:')
        console.log(line)
    })