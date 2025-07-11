const CModel = require("../Model/CModel");



const SaveData = async(req,res)=>{
    const {name, brand, price, imgurl} = req.body;
    try {
        const Cloud = await CModel.create({
            name:name,
            brand:brand,
            price:price,
            imgurl:imgurl
        })

        res.status(200).send({msg:"Product is Saved"});
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    SaveData
}