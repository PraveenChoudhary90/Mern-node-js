const express = require("express");
const app = express();
const bodyParser  =require("body-parser");
const cors = require("cors");
const mongoose = require ("mongoose");
const UserRoute = require("./Routes/UserRoute")

app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/User", UserRoute)


mongoose.connect("mongodb://127.0.0.1:27017/RohitRelationship").then(()=>{
    console.log("DB IS CONNECTED");
})

app.use("/User", UserRoute)



app.listen(8000,()=>{
    console.log("Server is Running on 8000 port");
})