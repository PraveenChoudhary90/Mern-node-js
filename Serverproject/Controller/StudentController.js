
const StudentModel = require("../Model/StudentModel");


const Insertdata =async (req,res) =>{
    const {name, number, email, city, password} = req.body;
     try {
         const Data= await StudentModel.create({
            name:name,
            number:number,
            city:city,
            email:email,
            password:password
         })
         res.status(200).json({msg:"Your are Registered!!!"});
  } catch (error) {
       console.log(error);
  }
}


const Logindata = async(req,res)=>{
   const {email, password} = req.body;
   try {
      const Employee = await  StudentModel.findOne({email:email}); 
      
      if (!Employee)
      {
        res.status(400).send({msg:"Invalid Email!"});
      }

      if (Employee.password!=password)
      {
        res.status(400).send({msg:"Invalid Password!"});
      }
 
      res.status(200).send(Employee);

 } catch (error) {
     console.log(error);
 }
}

module.exports = {
    Insertdata,
    Logindata
}