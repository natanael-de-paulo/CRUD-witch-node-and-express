const port = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dataBase = require('./database')

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', (request, response, next) => {
  response.send(dataBase.getProducts()) //converter para formato JSON automaticamente
})

app.get('/products/:id', (request, response, next) => {
  response.send(dataBase.getProduct(request.params.id))
})

app.post('/products', (request, response, next) => {
  const product = dataBase.saveProduct({
    name: request.body.name,
    price: request.body.price
  })
  response.send(product) //converte objeto em JSON
})

app.put('/products/:id', (request, response, next) => {
  const product = dataBase.saveProduct({
    id: request.params.id,
    name: request.body.name,
    price: request.body.price
  })
  response.send(product) // JSON
})

app.delete('/products/:id', (request, response, next) => {
  const product = dataBase.deleteProduct(request.params.id)
  response.send(product) // JSON
})

app.listen(port, () => {
  console.log(`Servidor está  executando na porta ${port}.`)
})
