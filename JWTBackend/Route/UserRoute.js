const express = require("express");
const route = express.Router();
const UserController = require("../Controller/UserController")


route.post("/Registration", UserController.UserRegistraction)
route.post("/login", UserController.UserLogin)
route.post("/userauthenticate", UserController.UserAuthenticatetion)







module.exports = route;