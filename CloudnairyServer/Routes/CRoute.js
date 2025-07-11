const express = require("express");
const route = express.Router();
const CController  =require("../Controller/CController");


route.post("/SaveData", CController.SaveData);






module.exports = route;