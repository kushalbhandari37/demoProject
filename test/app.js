require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const apiRoutes = require('../routes')

//api routes
app.use('/api/v1/',apiRoutes())


module.exports = app