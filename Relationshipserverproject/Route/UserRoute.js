
const express = require("express");
const route = express.Router();
const UserController = require("../Controller/UserController"); 


route.post("/Home", UserController.DataInsert);
route.get("/Display", UserController.Displaydata)


module.exports = route;