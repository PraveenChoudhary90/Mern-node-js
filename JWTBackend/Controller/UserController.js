
const UserModel = require("../Model/UserModel")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const UserRegistraction = async(req,res)=>{
 const  {  name,  email,  password} = req.body;
 try {
     const salt = await bcrypt.genSalt(10);
 const hashPassword = await bcrypt.hash(password, salt);
    const user = await UserModel.create({
        name: name,
       email: email,
        password: hashPassword
    })
    res.status(200).send({msg:"Your Are Registred successfully" })
 } catch (error) {
    res.status(400).send({msg:"Error in server"})  
    
 }
}

const UserLogin = async(req,res)=>{
   const { email, password}=req.body;
    try {
        LoginUser = await UserModel.findOne({email:email});
        if(!LoginUser){
            res.status(400).send({msg:"Invalid Email"})
        }
     const passwordMatch =  await bcrypt.compare(password, LoginUser.password);
   
    if (!passwordMatch)
    {
        res.status(400).send({msg:"Invalid Password!"})
    }
    } catch (error) {
        res.status(400).send({msg:"Internal error server"})
    }


 const token = await jwt.sign({id:LoginUser._id}, process.env.SECRETE_KEY, { expiresIn: '7 days' })
    console.log(token);   
   res.send({token:token});


}


const UserAuthenticatetion =async (req,res)=>{
        const token = req.header("x-auth-token");
    console.log(token);

    const verify= await jwt.verify(token, process.env.SECRETE_KEY);
    console.log(verify);
    const User= await UserModel.findById(verify.id).select("-password");
    
    res.send(User);



}

module.exports={
    UserRegistraction,
    UserLogin,
    UserAuthenticatetion
}