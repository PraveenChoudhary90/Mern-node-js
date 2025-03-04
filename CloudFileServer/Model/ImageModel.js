const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
    empno:String,
    name:String,
    email:String,
    city:String,
    salary:Number,
    designation:String,
    imgurl:String,
    password:String
})

module.exports = mongoose.model("image", ImageSchema);