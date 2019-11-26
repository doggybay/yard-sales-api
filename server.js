
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');
const { Model } = require('objection');
const knexInstance = require('./db/knex');

const users = require('./routes/users');

Model.knex(knexInstance);

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Usable routes
app.use('/api', users);

//Check if server is up
app.get("/", (req, res) => {
  res.send("Server is up......");
});

module.exports = { app }
