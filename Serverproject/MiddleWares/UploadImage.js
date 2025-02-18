

const PhotoImage = (req,res,next)=>{
    console.log("I want to save my data on mongodb database ");
    req.photo = "myimage.jpg";
    next();
}

module.exports = PhotoImage;