const Sale = require('../models/Sale')

exports.getAllSales = async (req, res) => {
  Sale.query().eager('sales_pictures').then(sales => res.json(sales))
}

exports.getOneSale = (req, res) => {
  Sale.query().findById(req.params.id).eager('sales_pictures').then(sale => res.json(sale))
}

exports.updateOneSale = (req, res) => {
  Sale.query().findById(req.params.id).patch(req.body).returning('*').then(updatedSale => res.json(updatedSale))
}

exports.deleteOneSale = (req, res) => {
  Sale.query().deleteById(req.params.id).returning('*').then(deletedSale => res.json(deletedSale))
}

exports.addOneSale = (req, res) => {
  Sale.query().insert(req.body).returning('*').then(newSale => res.json(newSale))
}