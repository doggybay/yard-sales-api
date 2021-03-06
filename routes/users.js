const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')

//Get all users
router.get('/users', usersController.getAllUsers)

//Get one user
router.get('/users/:id', usersController.getOneUser)

//Add a new user
router.post('/users', usersController.addOneUser)

//Auth a user
router.post('/users/login', usersController.authUser)

//Update one user
router.patch('/users/:id', usersController.updateOneUser)

//Delete one user
router.delete('/users/:id', usersController.deleteOneUser)

module.exports = router