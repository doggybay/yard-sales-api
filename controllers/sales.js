const Sale = require('../models/Sale')
const knex = require('../db/knex')
const picturesController = require('../controllers/pictures')

exports.getAllSales = async (req, res) => {
  Sale.query().eager('pictures').then(sales => res.json(sales))
}

exports.getOneSale = (req, res) => {
  Sale.query().findById(req.params.id).eager('pictures').then(sale => res.json(sale))
}

exports.updateOneSale = (req, res) => {
  let sale = req.body
  let saleToUpdate = {
    user_id: sale.user_id,
    title: sale.title,
    details: sale.details,
    location: sale.location,
    date_time: sale.date_time
  }

  Sale.query().findById(req.params.id).patch(saleToUpdate).returning('*').then(updatedSale => {
    let id = updatedSale.id
    let pictures = sale.pictures

    // Looping through the pictures array obtained from req body
    for (let i = 0; i < pictures.length; i++) {
      if (!pictures[i].hasOwnProperty('id')) {
        // Creating the new picture object
      let formattedPic = {
        sale_id: id,
        pic: pictures[i]
      }

      // Inserting the new picture object into the pictures table
        knex('pictures').insert(formattedPic).returning('*').then(result => result)
      }
    }

    // Sending the new sale back
    res.json(updatedSale)
  })

}

exports.deleteOneSale = (req, res) => {
  Sale.query().deleteById(req.params.id).returning('*').then(deletedSale => res.json(deletedSale))
}

exports.addOneSale = (req, res) => {
  // Taking sale out of the req body
  let sale = req.body

  // Creating the new sale object
  let formattedSale = {
    user_id: sale.user_id,
    title: sale.title,
    details: sale.details,
    location: sale.location,
    date_time: sale.date_time
  }

  // Inserting the new sale object into the sales table
  Sale.query().insert(formattedSale).returning('*').then(newSale => {
    let id = newSale.id
    let pictures = sale.pictures

    // Looping through the pictures array obtained from req body
    for (let i = 0; i < pictures.length; i++) {
      // Creating the new picture object
      let formattedPic = {
        sale_id: id,
        pic: pictures[i]
      }

      // Inserting the new picture object into the pictures table
      knex('pictures').insert(formattedPic).returning('*').then(result => result)
    }

    // Sending the new sale back
    res.json(newSale)
  })
}