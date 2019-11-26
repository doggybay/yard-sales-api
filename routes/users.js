const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')

//Get all users
router.get('/users', usersController.getAllUsers)
router.get('users/:id', usersController.getOneUser)


module.exports = router