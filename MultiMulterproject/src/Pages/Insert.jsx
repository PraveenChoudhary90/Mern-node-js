import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
function Insert() {
    const [input , setInput]= useState({});
    const [image, setImage]=useState([]);
  

      const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
      }

      const handelChangeImage = (e)=>{
        const files = e.target.files;
        setImage(files);
        console.log(image);
      }

      const handelSubmit =async (e)=>{
        e.preventDefault();

        const api = "http://localhost:8000/Images/InsertData";

        const formData = new FormData;
       for(let key in input){
        formData.append(key, input[key])
       }
      for (let i = 0; i < image.length; i++) 
      {
       formData.append('images', image[i]);
       }

      const response = await axios.post(api, formData);
      console.log(response.data);
    //   alert("DATA SAVE");


    }

  return (
    <>
     <Form style={{width:"500px", margin:"auto"}}>
    <h1>Insert page</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Product Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handelInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Product Brand</Form.Label>
        <Form.Control type="text" name='brand' onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text" name='price' onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmaile">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="file" multiple  onChange={handelChangeImage} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Insert