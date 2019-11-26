const User = require('../models/User')

exports.getAllUsers = (req, res) => {
  User.query().eager('sales').then(users => res.json(users))
}

exports.getOneUser = (req, res) => {
  User.query().findById(req.params.id).eager('sales').then(user => res.json(user))
}