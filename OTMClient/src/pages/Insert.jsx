import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
function Insert() {
  const [input, setInput] = useState({});
  const [image, setImage] = useState("");


  const handelInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
  }

  const handelImage = (e)=>{
    const files = e.target.files[0];
    setImage(files);
    console.log(image);
  }

  const handelSubmit = async(e)=>{
    e.preventDefault();
    let api = "http://localhost:8000/AutherBook/InsertData";
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("email", input.email);
    formData.append("bookname", input.bookname);
    formData.append("price", input.price);
    formData.append("image", image);
    const response = await axios.post(api, formData);
    console.log(response.data);
    alert("Author data save");

  }

  return (
    <>
    <div id="myform">
    <h1>Insert Page</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Auther Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassworda">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email' onChange={handelInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordb">
        <Form.Label>Enter Bookname</Form.Label>
        <Form.Control type="text" name='bookname' onChange={handelInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordn">
        <Form.Label>Enter Price</Form.Label>
        <Form.Control type="text" name='price' onChange={handelInput} />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Image url</Form.Label>
        <Form.Control type="file" onChange={handelImage} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>

    </div>
    </>
  )
}

export default Insert