const mongoose = require("mongoose");
const db = process.env.MONGO_DB_CONNECTION_URL;

//Connecting Database
const connectDB = async ()=>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        console.log("Database Connected Successfully")
    } catch (error) {
        console.error(error.message);        
    }
}

module.exports = connectDB;