const express = require("express");
const route = express.Router();
const EmpController = require("../Controller/EmpController");

route.post("/insertdata", EmpController.Insertdata)
route.get("/displaydata", EmpController.Displaydata)
route.post("/searchdata", EmpController.Searchdata)
route.get("/getdisplaydata", EmpController.Getdisplaydata)
route.post("/deletedata", EmpController.Deletedata)
route.post("/getinfromdata", EmpController.Getdatainfrom)
route.post("/savedata", EmpController.Saveupdatedata)

module.exports = route;