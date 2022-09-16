const sequence = {
  _id: 1,
  get id() {
    return this._id++
  }
}

const products = {}

const saveProduct = product => {
  if (!product.id) product.id = sequence.id
  products[product.id] = product

  return product
}

const getProduct = id => {
  return products[id] || {}
}

const getProducts = () => {
  return Object.values(products)
}


const deleteProduct = id => {
  const product = products[id]
  delete products[id]

  return product
}

module.exports = { saveProduct, getProduct, getProducts, deleteProduct }
