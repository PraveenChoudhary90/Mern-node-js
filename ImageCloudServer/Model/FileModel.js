const mongoose = require("mongoose");
const FileSchema = new mongoose.Schema({
    name:String,
    rollno:String,
    city:String,
    imgurl:String
})

module.exports = mongoose.model("photo", FileSchema);