const ImageModel = require("../Model/ImageModel")



const InsertAllData = async (req,res)=>{
   const imageUrls = req.files.map(file => file.path);
  const {name, brand, price} = req.body;
  const defaultImage= imageUrls[0];
  const Product = await ImageModel.create({
    name:name,
    brand:brand,
    price:price,
    defaultImage:defaultImage,
    images:imageUrls
  })
  console.log(Product)
   res.send("Product Save!!!");
}

const DisPlayData = async(req,res)=>{
    const Data = await ImageModel.find();
    res.send(Data);
}

const ShowimagesData = async(req,res)=>{
  const {id} = req.body;
  const Product = await ImageModel.findById(id);
  console.log(Product);
  res.send(Product);
}

module.exports = {
    InsertAllData,
    DisPlayData,
    ShowimagesData  
}