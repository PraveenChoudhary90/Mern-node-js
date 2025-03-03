const express = require("express");
const route = express.Router();
const FileCOntroller = require("../Controller/FIleController")



route.post("/InsertData", FileCOntroller.InsertData )
route.get("/DataDisplay", FileCOntroller.DisplayData )





module.exports = route;