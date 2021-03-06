import express from 'express'
import routes from './src/routes'
import passport from 'passport'
import logger from './src/utils/logger'


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
global.logger = logger
app.use(passport.initialize())
require('dotenv').config()
require('./src/config/passport')

// For CORS errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// require our routes
// route(app);
const apiVersion = '/api/v1'



app.use(apiVersion, routes);
logger.error("something went wrong")
  app.use("*", (req, res) =>
  res.status(200).send({
    message: "Not found, try to add " +apiVersion + " to access the api",
  })
);

module.exports = app;