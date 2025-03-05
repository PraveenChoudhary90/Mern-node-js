const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
    rollno:String,
    name:String,
    city:String,
    imgurl:String
});


module.exports = mongoose.model("pic", ImageSchema);