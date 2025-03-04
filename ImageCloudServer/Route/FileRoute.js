const express = require("express");
const route = express.Router();
const FileController  =require("../Controller/FileController")

route.post("/Savedata", FileController.Insertdata)
route.get("/Displaydata", FileController.Displaydata)







module.exports = route;