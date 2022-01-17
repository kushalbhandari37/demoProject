require('dotenv').config()
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const PORT =(process.env.PORT) ? process.env.PORT : 5000;
const apiRoutes = require('./routes')
const connectDB = require('./config/db');
const busboy = require('connect-busboy');


app.use(busboy({
    highWaterMark: 2 * 1024 * 1024, // Set 2MiB buffer
})); 
//connect Database
connectDB();



//Start Server
app.listen(PORT,()=>{
    console.log('Server has started');
})

//api routes
app.use('/api/v1/',apiRoutes())