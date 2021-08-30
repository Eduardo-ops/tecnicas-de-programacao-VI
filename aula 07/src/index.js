const express = require('express')

const app = express()
app.use(express.json())

const dataBaseCustomer = []
const dataBaseProduct = []

// ---------- CUSTOMER
app.post('/customers', (req, res) => {
    if (dataBaseCustomer.push(req.body)) {
        res.send('Customer created with sucessfully!')
    } else {
        res.status(405).send('Invalid input')
    }
})

app.get('/customers', (req, res) => {
    const item = dataBaseCustomer.find(item => item.id === req.params.id)
    res.send(item)
})

app.put('/customers:id', (req, res) => {
    const item = dataBaseCustomer.findIndex(item => item.id === req.params.id)
    if (item >= 0) {
        dataBaseCustomer[item] = req.body
        res.send('Customer update sucessfully!!!')
    } else {
        res.status(405).send('Invalid input')
    }
})

app.delete('/customers:id', (req, res) => {
    const item = dataBaseCustomer.findIndex(item => item.id === req.params.id)
    if (item >= 0) {
        dataBaseCustomer.splice(item, 1)
        res.send('Customer delete sucessfully!')
    } else {
        res.status(405).send('Invalid input')
    }
})


// ---------- PRODUCT
app.post('/products', (req, res) => {
    if (dataBaseProduct.push(req.body)) {
        res.send('Product created with sucessfully!')
    } else {
        res.status(405).send('Invalid input')
    }
})

app.get('/products', (req, res) => {
    const item = dataBaseProduct.find(item => item.id === req.params.id)
    res.send(item)
})

app.put('/products:id', (req, res) => {
    const item = dataBase.findIndex(item => item.cpf === req.params.id)
    if (item => 0) {
        dataBaseProduct[item] = req.body
        res.send('Product update sucessfully!')
    }
})

app.delete('/products:id', (req, res) => {
    const item = dataBaseProduct.findIndex(item => item.id === req.params.id)
    if (item >= 0) {
        dataBaseProduct.splice(item, 1)
        res.send('Product delete sucessfully!')
    } else {
        res.status(405).send('Invalid input')
    }
})

const port = 8087
app.listen(port, () => {
    console.log(`Server  started on port: ${port}`)
})