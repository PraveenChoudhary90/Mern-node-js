const express = require("express");
const app = express();
require("dotenv").config();
const StudentRoute = require("./Routes/StudentRoutes");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");



mongoose.connect(process.env.STRING_CONNECTION).then(()=>{
    console.log("Db Is conneted");
})

const port=process.env.PORT || 8000


// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/student", StudentRoute);



app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})