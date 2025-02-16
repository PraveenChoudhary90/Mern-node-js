const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema({
    empno:String,
    name:String,
    designation:String,
    city:String,
    salary:Number
});

module.exports = mongoose.model("empdata", EmpSchema);