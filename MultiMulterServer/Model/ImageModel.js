const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:String,
    defaultImage:String,
    images:[String]
})


module.exports = mongoose.model("multipic", ImageSchema)