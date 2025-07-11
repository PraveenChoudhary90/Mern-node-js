const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/PraveenCloudinaryy").then(()=>{
    console.log("DB IS CONNECTED")
})










app.listen(8000, ()=>{
    console.log("Server is running on 8000 port");
})