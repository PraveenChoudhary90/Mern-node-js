
const StudentModel = require("../Model/StudentModel");


const Insertdata =async (req,res) =>{
    const {name, number, email, city, password} = req.body;
    const Data = await StudentModel.create({
        name:name,
        number:number,
        email:email,
        city:city,
        password:password
    });
    res.send(Data);
    console.log("data is inserted succefully")
}

module.exports = {
    Insertdata,
}