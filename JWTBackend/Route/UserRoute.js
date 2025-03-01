const express = require("express");
const route = express.Router();
const UserController = require("../Controller/UserController")


route.post("/Registration", UserController.UserRegistraction)







module.exports = route;