const SalePicture = require('../models/Sale_Picture')

exports.getAllPictures = (req, res) => {
  SalePicture.query().then(salesPictures => res.json(salesPictures))
}

exports.getOnePicture = (req, res) => {
  SalePicture.query().findById(req.params.id).then(salePicture => res.json(salePicture))
}

exports.deleteOnePicture = (req, res) => {
  SalePicture.query().deleteById(req.params.id).returning('*').then(deletedPicture => res.json(deletedPicture))
}

exports.addOnePicture = (req, res) => {
  SalePicture.query().insert(req.body).returning('*').then(newPicture => res.json(newPicture))
}