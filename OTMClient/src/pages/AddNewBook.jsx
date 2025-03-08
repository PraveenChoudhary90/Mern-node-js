
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function AddNewBook() {
    const {id} = useParams();
    const [bookname, setBookname] = useState("");
    const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handelImage = (e)=>{
    const files = e.target.files[0];
    setImage(files);
    console.log(image);
  }

  const handelSubmit = async(e)=>{
    e.preventDefault();
    let api = "http://localhost:8000/AutherBook/AddNewBook";
    const formData = new FormData();
    formData.append("bookname",bookname);
    formData.append("price", price);
    formData.append("image", image);
    formData.append("aid", id);
    const response = await axios.post(api,formData);
    console.log(response.data);
    alert("Book data save");

  }
  return (
    <>
    <div id="myform">
    <h1>Welcome to new Add book page:{id}</h1>
    <Form>
     <Form.Group className="mb-3" controlId="formBasicPasswordb">
            <Form.Label>Enter Bookname</Form.Label>
            <Form.Control type="text" name='bookname' value={bookname}  onChange={(e)=>{setBookname(e.target.value)}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordn">
            <Form.Label>Enter Price</Form.Label>
            <Form.Control type="text" name='price' value={price}  onChange={(e)=>{setPrice(e.target.value)}} />
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

export default AddNewBook