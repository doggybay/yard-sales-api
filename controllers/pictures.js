const Picture = require('../models/Picture')

exports.getAllPictures = (req, res) => {
  Picture.query().then(pictures => res.json(pictures))
}

exports.getOnePicture = (req, res) => {
  Picture.query().findById(req.params.id).then(picture => res.json(picture))
}

exports.deleteOnePicture = (req, res) => {
  Picture.query().deleteById(req.params.id).returning('*').then(deletedPicture => res.json(deletedPicture))
}

exports.addOnePicture = (req, res) => {
  Picture.query().insert(req.body).returning('*').then(newPicture => res.json(newPicture))
}

exports.addPictures = (req, res) => {
  const pictures = res.body
  const newPictures = []
  pictures.forEach(picture => {
    Picture.query().insert(picture).returning('*').then(newPicture => newPictures.push(newPicture))
  }).then(res.json(newPictures))
}