const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors =require("cors");
const mongoose = require("mongoose");
const Errormiddleware = require("./ErrorMiddleware/ErrorMIddleware")


// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/home",Errormiddleware, (req,res,next)=>{
    try {
        console.log("home page is going on");
        const err = new Error("error in home page");
        res.status(200).send("home page having error")
        next(err);
    } catch (error) {
        console.log(error)
        res.status(400).send("internal server problem");
        
    }
})



app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/").then(()=>{
    console.log("DB IS CONNECTED")
})





app.listen(8000,()=>{
    console.log("Server is running on 8000 port")

}
)