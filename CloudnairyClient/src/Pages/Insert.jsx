import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    setImage(e.target.files);
    console.log(image);
  }


  const HandelSubmit = (e)=>{
    e.preventDefault();
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
        <Form.Control type="file" multiple onChange={HandelImage} />
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