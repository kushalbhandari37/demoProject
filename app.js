require('dotenv').config()
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
const PORT =(process.env.PORT) ? process.env.PORT : 5000;
const apiRoutes = require('./routes')
const connectDB = require('./config/db');

//connect Database
connectDB();
app.use(express.json());


//Start Server
app.listen(PORT,()=>{
    console.log('Server has started');
})

//api routes
app.use('/api/v1/',apiRoutes())