const express = require("express");
const route = express.Router();
const multer = require("multer")
const ImageController = require("../Controller/ImageController");


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "uploads/")

    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+"-"+file.originalname);
    }
})


const upload =multer ({storage:storage});


route.post("/InsertData",upload.single("image"),ImageController.InsertData);
route.get("/Display", ImageController.DisplayData )
route.post("/AddNewBook",upload.single("image") ,ImageController.AddnewBook);
route.get("/NewBookDisplay", ImageController.NewBookDisplay);





module.exports = route;