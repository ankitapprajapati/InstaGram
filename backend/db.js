const mongoose= require("mongoose")

require("dotenv").config();

const connectDB = async ()=>{
    try{
        await mongoose.connect( process.env.DATABASE_URL);
        console.log("successfully connected to DB  ")
    }
    catch(e){
        console.log("Database connection error : " + e.message )
        process.exit(1);
    }
}

module.exports = connectDB