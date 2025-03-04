const FileModel =require("../Model/FileModel")



const Insertdata = async(req,res)=>{
   const {imgurl,name,rollno,city}= req.body;
   const Image = await FileModel.create({
    name:name,
    rollno:rollno,
    city:city,
    imgurl:imgurl
   })
    res.send("okkk");
}

const Displaydata = async(req,res)=>{
    const Data = await FileModel.find();
    res.send(Data);
}

module.exports={
    Insertdata,
    Displaydata
}