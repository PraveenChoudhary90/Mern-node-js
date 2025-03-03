
const FileModel = require("../Model/FIleModel")



const InsertData =async(req,res)=>{
   const {imgurl,rollno,name,city}=req.body;
   const Mydata = await  FileModel.create({
      rollno:rollno,
      name:name,
      city:city,
      imgurl:imgurl
   })
   res.send(Mydata);


}

const DisplayData =async(req,res)=>{
    const Data = await FileModel.find();
    res.send(Data);
}


module.exports = {
    InsertData,
    DisplayData
}