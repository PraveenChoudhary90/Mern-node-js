import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";

function Insert() {
    const [input, setInput] = useState("");
    const [image, setImage] = useState("");

  const HandelInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }


  const HandelImage = (e)=>{
    setImage(e.target.files[0]);
    console.log(image);
  }


  const HandelSubmit =async (e)=>{
    e.preventDefault();
     
    const formData = new FormData();
           formData.append("file", image);
           formData.append("upload_preset", "praveen");
       formData.append("cloud_name", "drdjcmgtx");
       const api = "https://api.cloudinary.com/v1_1/drdjcmgtx/image/upload";
       const response  = await axios.post(api, formData);
       console.log(response.data);
       console.log(response.data.url);
       alert("okk img");

       const api1 = "http://localhost:8000/Cloud/SaveData";
       const response1  = await axios.post(api1,{imgurl:response.data.url, ...input}) 
       console.log(response1.data);
       alert("data save");
  }


  return (
    <>
    <div id="from">
    <h1>Insert Page</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text" name='name' value={input.name} onChange={HandelInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Brand</Form.Label>
        <Form.Control type="text" name='brand' value={input.brand} onChange={HandelInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Price</Form.Label>
        <Form.Control type="text" name='price' value={input.price} onChange={HandelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Product Image</Form.Label>
        <Form.Control type="file" name='imgurl'  onChange={HandelImage} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
    
    </>
  )
}

export default Insert