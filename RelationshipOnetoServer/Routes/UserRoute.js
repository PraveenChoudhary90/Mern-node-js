
const express = require("express")
const route = express.Router();
const UserController = require("../Controller/UserController")


route.post("/Insertdata",UserController.DataInsert)
route.get("/displaydata",UserController.DataDisplay)
route.post("/editdatasave", UserController.Editsavedata)
route.get("/Dispaynewdata", UserController.Displayallnewdata)

module.exports = route;