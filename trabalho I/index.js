const express = require('express')

const app = express()
app.use(express.json())
const dataBase = []

// CREATE
app.post('/', (req, res) => {
    dataBase.push(req.body)
    res.send('Student created with sucessfully!')
})

// READ
app.get('/', (req, res) => {
    res.send(dataBase)
})

// READ BY ID
app.get('/:id', (req, res) => {
    const item = dataBase.find(item => item.cpf === req.params.id)
    res.send(item)
})

// UPDATE
app.put('/:id', (req, res) => {
    const item = dataBase.findIndex(item => item.cpf === req.params.id)
    if (item >= 0) {
        dataBase[item] = req.body
        res.send('Item update sucessfully!')
    }
})

// DELETE
app.delete('/:id', (req, res) => {
    const item = dataBase.findIndex(item => item.cpf === req.params.id)
    if (item >= 0) {
        dataBase.splice(item, 1)
        res.send('Item delete sucessfully!')
    }
})

const port = 8087
app.listen(port, () => {
    console.log(`Server  started on port: ${port}`)
})