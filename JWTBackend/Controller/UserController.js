
const UserModel = require("../Model/UserModel")

const UserRegistraction = async(req,res)=>{
 const  {  name,  email,  password} = req.body;
 try {
    const user = await UserModel.create({
        name: name,
       email: email,
        password: password
    })
    res.status(200).send({msg:"Your Are Registred successfully" })
 } catch (error) {
    res.status(400).send({msg:"Error in server"})  
    
 }
}



module.exports={
    UserRegistraction
}