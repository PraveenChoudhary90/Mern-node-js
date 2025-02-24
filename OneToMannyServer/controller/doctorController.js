const DoctorModel = require("../model/doctorModel");



const DoctorRagistration = async(req,res)=>{
const { name , email,  number,  address,  city,  speciality,  password}  = req.body
res.send("okkkk")
}

module.exports = {
    DoctorRagistration
}