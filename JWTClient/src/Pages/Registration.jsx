import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
const Registration =()=>{
     const [input, setInput] = useState({});
     const navigate = useNavigate();

     const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}))
        console.log(input)
     }


     const handelSubmit = async(e)=>{
        e.preventDefault();
        const api = "http://localhost:8000/user/Registration";
        try {
            const response = await axios.post(api, input)
            console.log(response.data);
            toast.success(response.data.msg);
            navigate("/login")
        } catch (error) {
            toast.error(response.data.msg)
        }
     }

    return(
        <>
            <Form style={{width:"500px", margin:"auto"}} >
        <h1>Registration page here</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Full Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handelInput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="email" name='email'  onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
<ToastContainer />

        </>
    )
}
export default Registration;