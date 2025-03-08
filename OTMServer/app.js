const express  = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const ImageRoute = require("./Route/ImagesRoute");

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'))

mongoose.connect("mongodb://127.0.0.1:27017/cybromAuther").then(()=>{
    console.log("DB IS CONNECTED");
})





app.use("/AutherBook", ImageRoute);


app.listen(8000, ()=>{
    console.log("Server is Running on 8000 port")
})