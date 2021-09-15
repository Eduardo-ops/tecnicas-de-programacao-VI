const express = require('express')
const imovelRouter = require('./route/imovel.route')

const app = express()
app.use(express.json())
app.use('/imoveis', imovelRouter)

app.get('/', (req, res) => {
    res.send('Sucesso')
})

const port = 8087
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})