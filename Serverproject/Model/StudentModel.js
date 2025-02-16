
const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    name:String,
    number:Number,
    email:String,
    city:String,
    password:String


})

module.exports = mongoose.model("studentdata", StudentSchema);