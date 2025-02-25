const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser  =require("body-parser")
require("dotenv").config();
const doctorRoute = require("./Routes/doctorRoutes")
app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
const Port = process.env.PORT || 8000;

mongoose.connect(process.env.STRING).then(()=>{
    console.log("DB connected!!!");
})

app.use("/doctor", doctorRoute)


app.listen(Port,()=>{
    console.log(`Server is running on ${Port} port`)
})