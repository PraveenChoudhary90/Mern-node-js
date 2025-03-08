const express  = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const ImageRoute = require("./Route/ImagesRoute");
const cookieParser = require("cookie-parser");
const session = require("express-session");
app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'))
app.use(cookieParser());
mongoose.connect("mongodb://127.0.0.1:27017/cybromAuther").then(()=>{
    console.log("DB IS CONNECTED");
})


app.use(session({
    secret:"Your-Secret-Key",
    resave:true,
    saveUninitialized:true

}))



app.get("/setsession",(req,res)=>{
    req.session.myname="praveen kumar";
    req.session.city = "Bhopal",
    req.session.count = 0;
    res.send("Your Seesion is gooing on the way");
})

app.get("/getsession", (req,res)=>{
    const {myname, city} = req.session;
    console.log(req.session);
    console.log(req.session.sessionID);
    req.session.count++
    res.send({mycount:req.session.count,  myname:myname, mycity:city, seesionid:req.session.id})
})







app.get("/setcookie", (req,res)=>{
    res.cookie("stuname", "praveen choudhary"), {maxAge:600000};
    res.cookie("company", "cybrom");
    res.cookie("collage", "truba collage", {expire:24*60*60*1000});
    res.send("Your cookie has been set");
})


app.get("/getcookie", (req,res)=>{
    const{stuname, company, collage} = req.cookies;
    console.log(req.cookies);
    res.send({msg:"Getting cokkies",name:stuname, company:company, collagename:collage});
})

app.get("/deletecookie", (req,res)=>{
    res.clearCookie("stuname");
    res.send("Cookies Deleted!!!!!");
})


app.use("/AutherBook", ImageRoute);


app.listen(8000, ()=>{
    console.log("Server is Running on 8000 port")
})