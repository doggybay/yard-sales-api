const User = require('../models/User')

exports.getAllUsers = (req, res) => {
  User.query().eager('sales').then(users => res.json(users))
}

exports.getOneUser = (req, res) => {
  User.query().findById(req.params.id).eager('sales').then(user => res.json(user))
}

exports.updateOneUser = (req, res) => {
  User.query().findById(req.params.id).patch(req.body).returning('*').then(updatedUser => res.json(updatedUser))
}

exports.deleteOneUser = (req, res) => {
  User.query().deleteById(req.params.id).returning('*').then(deletedUser => res.json(deletedUser))
}

exports.addOneUser = (req, res) => {
  User.query().insert(req.body).returning('*').then(newUser => res.json(newUser))
}