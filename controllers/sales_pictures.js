const SalePicture = require('../models/Sale_Picture')

exports.getAllPictures = (req, res) => {
  SalePicture.query().then(salesPictures => res.json(salesPictures))
}