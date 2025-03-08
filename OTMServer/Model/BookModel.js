const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    bookname:String,
    price:String,
    image:String,
    autherid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"auther"
}
})

module.exports = mongoose.model("book", BookSchema);