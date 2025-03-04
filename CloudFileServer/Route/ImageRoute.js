const express = require("express");
const multer = require("multer");
const route = express.Router();
const ImageController = require("../Controller/ImageController")




const storage=  multer.diskStorage({
       destination: (req, file, cb)=>{
        cb(null, 'uploads/'); // Save files to uploads directory
       },      
       filename:(req, file, cb)=>{
        cb(null, Date.now()+"-"+file.originalname); // Keep original file name
       }  
})

const upload = multer({ storage: storage });



route.post("/SaveData", upload.single('image'), ImageController.SaveData);
route.get("/Displaydata", ImageController.Displaydata);










module.exports = route;