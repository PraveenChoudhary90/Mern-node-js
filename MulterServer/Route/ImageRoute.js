const express = require("express");
const route = express.Router();
const multer = require("multer");
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




route.post("/InsertData", upload.single("imagedata"),  ImageController.InsertData);
route.get("/Displaydata", ImageController.Displaydata);








module.exports = route;