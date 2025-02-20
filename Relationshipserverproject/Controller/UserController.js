

const UserModel = require("../Model/UserModel");
const ProfilModel = require("../Model/ProfileModel");
const ProfileModel = require("../Model/ProfileModel");




const DataInsert =async (req,res)=>{
    const {username,email,firstname,lastname} = req.body;
    const User = await UserModel.create({
        username:username,
        email:email
    })
    console.log(User);

    const Profile = await ProfileModel.create({
        firstname:firstname,
        lastname:lastname,
        userid:User._id
    })
    console.log(Profile)
    res.send("okkkkk")

}

const Displaydata =async (req,res)=>{
    const Mydata =  await ProfileModel.find().populate("userid")
    console.log("okkk");
    res.send(Mydata)
    
}



module.exports = {
    DataInsert,
    Displaydata
}