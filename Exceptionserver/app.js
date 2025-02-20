const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors =require("cors");
const mongoose = require("mongoose");
// const Errormiddleware = require("./ErrorMiddleware/ErrorMIddleware")
app.use(cors());


// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/Homepage", (req,res)=>{
    const status = true;
    if(status)
    {
       console.log("Home page data")
    res.status(200).send("home page data")
    }
    else{
        res.status(400).send("home page error")
    }
    
})
     

app.get("/Aboutpage",(req,res,next)=>{
    try {
        console.log("about page data")
        throw new Error("about page loading error")
        res.status(200).send("about page data")
        next()
    } catch (error) {
        res.status(400).send("about page error not connetced with database")
        
    }
})
    



mongoose.connect("mongodb://127.0.0.1:27017/").then(()=>{
    console.log("DB IS CONNECTED")
})





app.listen(8000,()=>{
    console.log("Server is running on 8000 port")

}
)