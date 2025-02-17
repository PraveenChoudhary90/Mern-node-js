const express = require("express");
const route = express.Router();
const StudentController = require("../Controller/StudentController");

route.post("/insertdata", StudentController.Insertdata)
route.post("/logindata", StudentController.Logindata)




module.exports = route;