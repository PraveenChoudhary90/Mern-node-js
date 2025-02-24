import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BACK_URL from '../config';
import axios from "axios"
const DoctorRegistraction = ()=>{
    const [input , setInput] = useState({});


    const handleInput = (e)=>{
        const name  = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values , [name]:value}));
        console.log(input)

    }

    const HandelSubmit = async(e)=>{
        e.preventDefault();
        const api = `${BACK_URL}/doctor/DoctorRagistration`;
        try {
            const response = await axios.post(api, input)
            console.log(response);
            alert("Your are Registreaded");

        } catch (error) {
            console.log(error)
        }

    }
    return(
        <>
        <div id="myfrom">
        <h1>Doctor Resigtraction page</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Doctor Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text"  name='email' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailc">
        <Form.Label>Enter Mobile Number</Form.Label>
        <Form.Control type="text"  name='number' onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text"  name='address' onChange={handleInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailk">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"   name='city' onChange={handleInput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmaile">
        <Form.Label>select Specialization</Form.Label>
        <Form.Select aria-label="Default select example" name="speciality" onChange={handleInput}>
          <option>Open this select menu</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="ENT">ENT</option>
          <option value="Neuro Surgeon">Neuro Surgeon</option>
          <option value="Dentist">Dentist</option>
          <option value="Plastic Surgeon">Plastic Surgeon</option>
    </Form.Select>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' onChange={handleInput} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default DoctorRegistraction;