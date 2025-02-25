const mongoose = require("mongoose");
const DoctoreSchema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    address:String,
    city:String,
    specailization:String,
    password:String
})

module.exports = mongoose.model("/doctor", DoctoreSchema);