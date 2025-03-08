const AutherModel = require("../Model/AutherModel");
const BookModel = require("../Model/BookModel");


const InsertData  =async (req,res)=>{
    const {name, email, bookname, price} =req.body;
    const imgurl = req.file.filename;
    const Auther = await AutherModel.create({
        name:name,
        email:email,   
    });
    const Book = await BookModel.create({
        bookname:bookname,
        price:price,
        image:imgurl,
        autherid:Auther._id
    })
      await AutherModel.findByIdAndUpdate(Auther._id,  {$push:{bookid:Book._id}})

    res.send("okkk");
}

const DisplayData = async(req,res)=>{
    const AutherBookData = await AutherModel.find().populate("bookid");
    res.send(AutherBookData);
    
}

const AddnewBook = async(req,res)=>{
    const {bookname, price ,aid} = req.body;
    const myimg = req.file.filename;
    const Book = await BookModel.create({
        bookname:bookname,
        price:price,
        autherid:aid,
        image:myimg

    })
    await AutherModel.findByIdAndUpdate(aid, {$push:{ bookid:Book._id}})
  res.send("new book succesflyy added!!!");

}

module.exports = {
    InsertData,
    DisplayData,
    AddnewBook
}