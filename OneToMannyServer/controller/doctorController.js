const DoctorModel = require("../model/doctorModel");



const DoctorRagistration = async(req,res)=>{
const { name , email,  number,  address,  city,  speciality,  password}  = req.body;

        const Doctor = await DoctorModel.create({
            name:name,
            email:email,
            number:number,
            address:address, 
            city:city,
            specailization:speciality,
            password:password 
        })
        console.log(Doctor)
        res.send("okkk")
}

const DoctorDisplay = async(req,res)=>{
    const Display = await DoctorModel.find();
    console.log("okk");
    res.send(Display)
}

module.exports = {
    DoctorRagistration,
    DoctorDisplay
}