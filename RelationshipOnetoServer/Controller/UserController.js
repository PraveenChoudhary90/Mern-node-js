


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

const Editsavedata =async (req,res)=>{
    const { id, bookname, price }=req.body;
    const Book = await BookModel.create({
        bookname:bookname,
        bookprice:price,
        authorid:id
    })
    await AuthorModel.findByIdAndUpdate(id,{$push: {bookid: Book._id}})
}

const Displayallnewdata = async(req,res)=>{
    const mydata = await AuthorModel.find().populate("bookid")
    console.log("okk");
    res.status(200).send(mydata)
}


module.exports = {
    DataInsert,
    DataDisplay,
    Editsavedata,
    Displayallnewdata
}