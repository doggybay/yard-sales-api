const express = require('express')
const router = express.Router()

const salesPicturesController = require('../controllers/sales_pictures')

router.get('/sales-pictures', salesPicturesController.getAllPictures)



module.exports = router