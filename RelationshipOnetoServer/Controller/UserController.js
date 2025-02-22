


const AuthorModel = require("../Model/AuthorModel");
const BookModel = require("../Model/BookModel");

const DataInsert = async (req,res)=>{
    const { name, email, city } = req.body;
    const Data = await AuthorModel.create({
        name:name,
        email:email,
        city:city
    })
   console.log(Data);
   res.send("okk")
}

const DataDisplay =async (req,res)=>{
    const Mydata = await AuthorModel.find();
    res.send(Mydata);

}


module.exports = {
    DataInsert,
    DataDisplay
}