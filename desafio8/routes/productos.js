const express = require('express')
const productModel = require('../model/product')
const router = express.Router()

router.get('/productos', async (req, res) => {
  res.send(await productModel.getAll())
})

router.get('/productos/:id', async (req, res) => {
  let id  = req.params.id
  res.send(await productModel.getById(id))
})

router.post('/productos', async (req, res) => {
  let producto = req.body
  res.send(await productModel.save(producto))
})

router.put('/productos/:id', async (req, res) => {
  let producto = req.body
  let id = req.params.id
  res.send(await productModel.update(id, producto))
})

router.delete('/productos/:id', async (req, res) => {
  let id = req.params.id
  res.send(await productModel.deleteById(id))
})

module.exports = router