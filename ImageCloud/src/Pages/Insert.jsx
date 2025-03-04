import React, { useState } from 'react'
import axios from "axios"
function Insert() {
    const [input, setInput]= useState({});
    const [image, setImage] = useState("");


    const handelInput= (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input)

    }

    const handelFile = (e)=>{
        const files = e.target.files[0];
        setImage(files);
        console.log(image)
    }

    const handelSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "praveen");
    formData.append("cloud_name", "drdjcmgtx");
    const api = "https://api.cloudinary.com/v1_1/drdjcmgtx/image/upload";
    const response  = await axios.post(api, formData);
    console.log(response.data);
    console.log(response.data.url);

    const api1 = "http://localhost:8000/Cloud/Savedata";
    const response1 = await axios.post(api1, {imgurl:response.data.url, ...input})
    console.log(response1.data);
    alert("data save")
        
    }

  return (
    <>
    <h1>Insert page</h1>
    Enter Name :<input type='text' name='name' onChange={handelInput} /><br></br>
    Enter Rollno :<input type='text' name='rollno' onChange={handelInput}  /><br></br>
    Enter City :<input type='text' name='city' onChange={handelInput} /><br></br>
    Image url :<input type='file' name='imgurl' onChange={handelFile}  /><br></br>
    <button onClick={handelSubmit}>save!!!</button>
    </>
  )
}

export default Insert