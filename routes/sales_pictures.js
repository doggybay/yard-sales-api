const express = require('express')
const router = express.Router()

const salesPicturesController = require('../controllers/sales_pictures')

//Get all sales pictures
router.get('/sales-pictures', salesPicturesController.getAllPictures)

//Get one sales picture
router.get('/sales-pictures/:id', salesPicturesController.getOnePicture)

//Add a new picture
router.post('/sales-pictures', salesPicturesController.addOnePicture)

//Delete a picture
router.delete('/sales-pictures/:id', salesPicturesController.deleteOnePicture)

module.exports = router