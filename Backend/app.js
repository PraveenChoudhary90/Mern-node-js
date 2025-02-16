const express = require("express");
const app = express();
const EmpRoutes = require("./Routes/EmpRoutes");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");



mongoose.connect("mongodb://127.0.0.1:27017/Empdatabase").then(res=>{
    console.log("Database Is Connected");
})

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/employee", EmpRoutes);


app.listen(8000,()=>{
    console.log("Server is running on 8000 port")
})