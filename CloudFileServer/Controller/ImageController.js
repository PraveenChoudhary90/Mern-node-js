const ImageModel = require("../Model/ImageModel");




const SaveData = async(req,res)=>{
    const { empno,name,email,city,salary,designation,password}= req.body;
    const myimg = req.file.filename;
   

     const Data = await ImageModel.create({
        empno:empno,
        name:name,
        email:email,
        city:city,
       salary:salary,
       designation:designation,
       password:password,
       imgurl:myimg
     })  


    res.send(Data);
}

const Displaydata = async(req,res)=>{
    const Image = await ImageModel.find();
    res.send(Image);
    console.log("okk");
}



module.exports = {
    SaveData,
    Displaydata
}