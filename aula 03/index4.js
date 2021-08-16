const http = require(http)
const fs = require('fs')

const fileName = _dirname + './html/index.html'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    fs.readFile(fileName, (error, data) => {
        res.end(data)
    })
})

const port = 8087

server.listen(port, () => {
    console.log('Servidor ON Port' + port)
})