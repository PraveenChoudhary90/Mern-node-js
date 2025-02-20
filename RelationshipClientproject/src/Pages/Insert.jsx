import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"

const Insert = ()=>{
    const[input,setInput]= useState({});


    const HandelInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);

    }

    const HandelSubmit = async(e)=>{
        e.preventDefault();
        const api = "http://localhost:8000/User/Home";
        const response = await axios.post(api, input);
        console.log(response);
        alert("Data save");
    }
    return(
        <>
        <h1 >Welcome to my Insert page</h1>
         <Form id='myfrom'>
      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Username</Form.Label>
        <Form.Control type="text" name='username' value={input.username} onChange={HandelInput} /> 
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" name='email' value={input.email} onChange={HandelInput} /> 
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmailc">
        <Form.Label>Enter First Name</Form.Label>
        <Form.Control type="text" name='firstname' value={input.firstname} onChange={HandelInput} /> 
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmaild">
        <Form.Label>Enter Last Name</Form.Label>
        <Form.Control type="text" name='lastname' value={input.lastname} onChange={HandelInput} /> 
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
        
        </>
    )
}

export default Insert;