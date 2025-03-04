import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"

const Insert = ()=>{
    const [input, setInput] = useState({});
    const [SelectFile, setSelectFile]= useState("");
     

    const handelInput = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);

    }

    const handelFile = (e)=>{
        setSelectFile(e.target.files[0]);
        console.log(SelectFile);
    }


    const handelSubmit = async(e)=>{
        e.preventDefault();

        const api = "http://localhost:8000/Image/SaveData";

        const Formdata = new FormData();
        Formdata.append("empno", input.empno)
        Formdata.append("name", input.name)
        Formdata.append("email", input.email)
        Formdata.append("city", input.city)
        Formdata.append("salary", input.salary)
        Formdata.append("designation", input.designation)
        Formdata.append("password", input.password)
        Formdata.append("image", SelectFile)


        const response = await axios.post(api, Formdata);
        console.log(response.data);
        alert("data save")
    }

    return(
        <>
        <div id="myfrom">
        <h1>Insert data</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee no</Form.Label>
        <Form.Control type="text" name='empno' value={input.empno} onChange={handelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Employee Name</Form.Label>
        <Form.Control type="text"  name='name' value={input.name} onChange={handelInput}   />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmailc">
        <Form.Label>Enter Employee Email</Form.Label>
        <Form.Control type="email"  name='email' value={input.email} onChange={handelInput}    />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Enter Employee City</Form.Label>
        <Form.Control type="text"  name='city' value={input.city} onChange={handelInput}   />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailh">
        <Form.Label>Enter Employee Salary</Form.Label>
        <Form.Control type="text"   name='salary' value={input.salary} onChange={handelInput}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailm">
        <Form.Label>Enter Employee Designation</Form.Label>
        <Form.Control type="text"  name='designation' value={input.designation} onChange={handelInput}   />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' value={input.password} onChange={handelInput}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailf">
        <Form.Label>Image Url</Form.Label>
        <Form.Control type="file" name='imgurl'  onChange={handelFile}  />
      </Form.Group>

     
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Insert;