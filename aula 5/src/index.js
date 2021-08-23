const express = require('express')
const path = require('path')

const app = express()
app.get('/faculdade', (req, res) => {
    res.send('Unvias')
})

app.get('/aluno', (req, res) => {
    res.send('Eduardo Isidoro Gonçalves')
})

const staticFolderPath = path.join(__dirname, 'files')

app.use('/static', express.static(staticFolderPath))

app.get('/', (req, res) => {
    res.send('Hello World!!!')
})

const port = 8080

app.listen(port, () => {
    console.log('Server started on port: ${port}')
})

