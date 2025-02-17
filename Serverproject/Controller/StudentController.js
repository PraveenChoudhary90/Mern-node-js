
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


const Logindata = async(req,res)=>{
   const {email, password} = req.body;
   try {
    if(!resdata){
   const resdata = await StudentModel.find({email:email})
    }
    if(!resdata.password == password){
   const resdata = await StudentModel.find({password:password})

    }
    
   } catch (error) {
    console.log(error)
    
   }
}

module.exports = {
    Insertdata,
    Logindata
}