

const ErrorMiddleware = (err, req,res,next)=>{
    console.log("Home page have internal problem");
    err.message= err.message || "Internal server error";
    err.status=err.status||400
    res.status(err.status).send(err.message)

}
module.exports = ErrorMiddleware;