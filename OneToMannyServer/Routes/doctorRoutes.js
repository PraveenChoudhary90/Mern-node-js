const express = require ("express");
const route = express.Router();
const DoctorController = require("../controller/doctorController");

route.post("/DoctorRagistration", DoctorController.DoctorRagistration);
route.get("/DoctorDisplay", DoctorController.DoctorDisplay);




module.exports = route;