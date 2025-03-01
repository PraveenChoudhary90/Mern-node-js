const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const UserRoute = require("./Route/UserRoute")

app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.STRING).then( ()=>
    {console.log("DB IS CONNECTED") }
)

app.use("/user", UserRoute )

const port =process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server is running on ${port} port`)
})