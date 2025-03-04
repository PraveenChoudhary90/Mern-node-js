const express = require("express");
const app = express();
const mongoose =require("mongoose");
const cors = require ("cors");
const bodyParser = require("body-parser");
const ImageRoute = require("./Route/ImageRoute")

app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'))
//image dekne ke liye use karte hai
mongoose.connect("mongodb://127.0.0.1:27017/PradumImage").then(()=>{
    console.log("DB IS CONNECTED");
})


app.use("/Image", ImageRoute)

app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})