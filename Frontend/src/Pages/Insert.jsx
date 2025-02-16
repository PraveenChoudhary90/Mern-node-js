import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"

const Insert = ()=>{
    const [input , setinput]= useState({});


    const HandelChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setinput(values=>({...values , [name]:value})); 
        console.log(input);
    }

    const HandelSubmit=async(e)=>{
        e.preventDefault();
        const api = "http://localhost:8000/employee/insertdata";
        const Data =await axios.post(api,input).then((res)=>{
            alert("Data is Suceesfully inserted")
        console.log(res.data);

        }
    ); 
    

    }
    return(
        <>
        <div id="myfrom">
        <h1>Insert Page</h1>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Number</Form.Label>
        <Form.Control type="text" name='empno' value={input.empno} onChange={HandelChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type=""text  name='name' value={input.name} onChange={HandelChange} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassworda">
        <Form.Label>Employee Designation</Form.Label>
        <Form.Control type=""text  name='designation' value={input.designation} onChange={HandelChange} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordb">
        <Form.Label>Employee City</Form.Label>
        <Form.Control type=""text  name='city' value={input.city} onChange={HandelChange} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordc">
        <Form.Label>Employee Salary</Form.Label>
        <Form.Control type=""text  name='salary' value={input.salary} onChange={HandelChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
    </div>

        
        </>
    )
}

export default Insert;