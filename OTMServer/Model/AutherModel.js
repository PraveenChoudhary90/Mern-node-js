const mongoose = require("mongoose");
const AutherSchema = new mongoose.Schema({
    name:String,
    email:String,
    bookid:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
}]
})

module.exports = mongoose.model("auther", AutherSchema);