const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors =require("cors");
const mongoose = require("mongoose");
const EmpMiddleware = require("./Middleware/EmpMiddelware");


// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));






app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/").then(()=>{
    console.log("DB IS CONNECTED")
})

app.use((req,res,next)=>{
    console.log("Start Middleware");
    next();
})
app.get("/home",EmpMiddleware,(req,res)=>{
    console.log("File is uploading here");
    console.log(req.name);
    console.log(req.mypic);
    res.send("my home data here");
})

app.get("/about",(req,res,next)=>{
    console.log("it is all about page");
    next();
},(req,res)=>{
    console.log("about dataa page here");
    res.send("about page data")

})

app.get("/service", (req,res,next)=>{
    console.log("Service page data loding");
    res.send("serveic page data");
    next();
})

app.use((req,res)=>{
    console.log("End Middleware");
})



app.listen(8000,()=>{
    console.log("Server is running on 8000 port")

}
)