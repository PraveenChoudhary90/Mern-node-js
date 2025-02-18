
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {message} from "antd";
import { useNavigate } from 'react-router-dom';
import '@ant-design/v5-patch-for-react-19';
const Login = ()=>{
    let navigate = useNavigate();
       
    
    const [input , setinput]= useState({});

  const handelchange = (e)=>{
   const name = e.target.name;
   const value = e.target.value;
   setinput((values)=>({...values, [name]:value}))
   console.log(input);
  }

 const handelsubmit = async(e)=>{
    e.preventDefault();
    const api = "http://localhost:8000/student/logindata";
     try {
          const response= await axios.post(api, input);
          console.log(response.data.email);
          if (response.status==200)
          {
            localStorage.setItem("username", response.data.name);
            localStorage.setItem("useremail", response.data.email);
            navigate("/dashboard");
          }
         

    } catch (error) {
         message.error(error.response.data.msg);
    }
  }




    return(
        <>
 <div id="myfrom">
        <h1>Login User</h1>
        <Form>
        

      <Form.Group className="mb-3" controlId="formBasicPasswordb">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"  name='email' value={input.email} onChange={handelchange} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPasswordd">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control type="password"  name='password' value={input.password} onChange={handelchange} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handelsubmit}>
        Submit
      </Button>
    </Form>
    </div>        </>
    )
}
export default Login;