const express = require('express')
const router = express.Router()

const salesPicturesController = require('../controllers/pictures')

//Get all sales pictures
router.get('/pictures', salesPicturesController.getAllPictures)

//Get one sales picture
router.get('/pictures/:id', salesPicturesController.getOnePicture)

//Add a new picture
router.post('/pictures', salesPicturesController.addOnePicture)

//Delete a picture
router.delete('/pictures/:id', salesPicturesController.deleteOnePicture)

module.exports = router