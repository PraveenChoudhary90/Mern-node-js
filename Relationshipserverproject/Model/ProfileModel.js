
const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    userid:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
        
    }
})

module.exports = mongoose.model("profile" , ProfileSchema);