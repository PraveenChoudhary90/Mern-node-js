

const Myfile = (req,res,next)=>{
    console.log("i want to save my data on mongodb database");
    req.name = "praveen";
    req.mypic = "mypic.jpg";
    next();

}

module.exports = Myfile;