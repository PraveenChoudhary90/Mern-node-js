const ImageModel = require("../Model/ImageModel");



const InsertData  =async(req,res)=>{
    const {rollno, name, city}= req.body;
    const myimg = req.file.filename;
    const Data = await ImageModel.create({
        rollno:rollno,
        name:name,
        city:city,
        imgurl:myimg
    })
    res.send(Data);
}

const Displaydata = async(req,res)=>{
    const Mydata =await ImageModel.find();
    res.send(Mydata);
}


module.exports = {
    InsertData,
    Displaydata
}