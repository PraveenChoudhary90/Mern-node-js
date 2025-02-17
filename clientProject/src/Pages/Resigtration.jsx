import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {message} from "antd";

const Registration = ()=>{
  
    const [input , setinput]= useState({});

  const handelchange = (e)=>{
   const name = e.target.name;
   const value = e.target.value;
   setinput((values)=>({...values, [name]:value}))
   console.log(input);
  }

 const handelsubmit = async(e)=>{
    e.preventDefault();
    const api = "http://localhost:8000/student/insertdata";
       try {
          const response= await axios.post(api, input);
          console.log(response);
          message.success(response.data.msg);
    } catch (error) {
          console.log(error);
           alert("error in server");  
    }

 }


    return(
        <>
        <div id="myfrom">
        <h1>Registration page</h1>
        <Form>
         <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Enter  Full Name</Form.Label>
        <Form.Control type="text"  name='name' value={input.name} onChange={handelchange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Enter Your Number</Form.Label>
        <Form.Control type="text" name='number' value={input.number} onChange={handelchange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPasswordb">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"  name='email' value={input.email} onChange={handelchange} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPasswordc">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"  name='city' value={input.city} onChange={handelchange} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPasswordd">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password"  name='password' value={input.password} onChange={handelchange} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handelsubmit}>
        Submit
      </Button>
    </Form>
    </div>

        </>
    )
}
export default Registration;