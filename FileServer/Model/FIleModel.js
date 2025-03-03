const mongoose = require("mongoose");
const FileSchema = new mongoose.Schema({
    rollno:String,
    name:String,
    city:String,
    imgurl:String
})

module.exports = mongoose.model("file", FileSchema);