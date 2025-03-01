import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
const Registration = ()=>{
const [input, setInput] = useState({});

  const handelInput = (e)=>{
      const name = e.target.name;
      const value = e.target.value;
      setInput(values =>({...values ,[name]:value}))
      console.log(input);
  }

  const handelSubmit = async(e)=>{
    e.preventDefault();
    const api = "http://localhost:8000/User/userrigistration";
    try {
       const response = await axios.post(api, input)
       alert("Your are ragistred"); 
       console.log(response.data);
    } catch (error) {
        console.log(error)
    }

  }

    return(
        <>
         <Form style={{width:"400px", margin:"auto"}}>
        <h1>Registration page</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handelInput}  />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email"  name='email' onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Registration;