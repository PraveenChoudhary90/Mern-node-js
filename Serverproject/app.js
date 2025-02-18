const express = require("express");
const app = express();
require("dotenv").config();
const StudentRoute = require("./Routes/StudentRoutes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Photoupload = require("./MiddleWares/UploadImage");

mongoose.connect(process.env.STRING_CONNECTION).then(()=>{
    console.log("Db Is conneted");
})

const port=process.env.PORT || 8000


// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


// app.use((req,res,next)=>{
//     console.log("This is my frist middleware");
//     next();
// })



// app.get("/home",(req,res,next)=>{
//     console.log("This is our frist middleware");
//     next();
// },
// (req,res)=>{
//     console.log("Home page");
//     res.send("Home page data")
// })

// app.use((req,res,next)=>{
//     console.log("start middleware");
//     req.name = "praveenchoudhary";
//     req.number = 9098354728;
//     next();
// })

// app.get("/home",(req,res,next)=>{
//     console.log("Home page");
//     console.log(req.name);
//     console.log(req.number);
//     res.send("Home page data")
//     next();
// })
app.get("/home",Photoupload,(req,res)=>{
    console.log("Home page to data save on photo folder");
    console.log(req.photo)
    res.send("Home page data")
})

// app.get("/about",(req,res,next)=>{
//     console.log("about page");
//     res.send("about page data")
//     next();
// })


// app.get("/service",(req,res,next)=>{
//     console.log("Service page");
//     res.send("Service page data")
//     next();
// })

// app.use((req,res)=>{
//     console.log("End MiddleWare");
// })

app.use("/student", StudentRoute);



app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})