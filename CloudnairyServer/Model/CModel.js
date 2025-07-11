const mongoose = require("mongoose");
const CSchema  =new mongoose.Schema({
    name:String,
    brand:String,
    price:String,
    imgurl:String
})


module.exports = mongoose.model("cloudinary", CSchema);