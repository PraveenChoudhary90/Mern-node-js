const EmpModel = require("../Model/EmpModel");


const Insertdata = async(req,res)=>{
    const {empno, name, designation,city, salary}=req.body;
    const Data = await EmpModel.create({
        empno:empno,
        name:name,
        designation:designation,
        city:city,
        salary:salary
    })
    res.send(Data);
    console.log("okkk");
  
}


const Displaydata=async(req,res)=>{
    const Data = await EmpModel.find();
    res.send(Data);
    console.log(Data);

}

const Searchdata=async(req,res)=>{
    const {empno} = req.body;
  const search = await EmpModel.find({empno:empno});
    res.send(search);
    console.log("okk");
    
}


const Getdisplaydata =async (req,res)=>{
    const data = await EmpModel.find();
    res.send(data)
    console.log("data is okk");

}

const Deletedata =async(req,res)=>{
  const{id}=req.body
  await EmpModel.findByIdAndDelete(id)
  res.json("Data is Deleted");
    }


   

    const Getdatainfrom =async (req,res)=>{
        const {id}= req.body;
        const Data = await EmpModel.findById(id);
        res.send(Data);
        console.log("from me data  aa raha hai");


    }

   const Saveupdatedata=async(req,res)=>{
  const {_id}=req.body;
  await EmpModel.findByIdAndUpdate(_id,req.body)
  res.send("Data Updated")
  console.log("update data");
}




module.exports = {
    Insertdata,
    Displaydata,
    Searchdata,
    Getdisplaydata,
    Deletedata,
    Getdatainfrom,
    Saveupdatedata
}