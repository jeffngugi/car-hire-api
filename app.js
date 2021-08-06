const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// For CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// require our routes
// require('./server/routes')(app);

  app.use("*", (req, res) =>
  res.status(200).send({
    message: "Not found, try to add /api/v1 to access the api",
  })
);

module.exports = app;