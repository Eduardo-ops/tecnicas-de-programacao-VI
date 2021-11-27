const express = require('express')
const customerRoute = require('./routes/customer.route')
const productRoute = require('./routes/product.route')

const app = express()
app.use(express.json())

app.use('/customers', customerRoute)
app.use('/products', productRoute)

app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = 8087

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})