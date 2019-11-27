const express = require('express')
const router = express.Router()

const salesController = require('../controllers/sales')

//Get all sales
router.get('/sales', salesController.getAllSales)

//Get one sale
router.get('/sales/:id', salesController.getOneSale)

//Add a new sale
router.post('/sales', salesController.addOneSale)

//Updated one sale
router.patch('/sales/:id', salesController.updateOneSale)

//Delete one sale 
router.delete('/sales/:id', salesController.deleteOneSale)

module.exports = router