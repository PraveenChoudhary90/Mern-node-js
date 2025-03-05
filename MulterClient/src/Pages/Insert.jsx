import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Insert = ()=>{
    const [input, setInput]= useState({});
    const [image, setImage]=useState("");

    const handelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const handelImage = (e)=>{
        const name = e.target.files[0];
        setImage(name);
        console.log(image);
    }



    return(
        <>
        <div id="fromdata">
        <h1>Welcome to Insert page</h1>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Roll no</Form.Label>
        <Form.Control type="text" name='rollno' onChange={handelInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmailk">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name' onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" name='city' onChange={handelInput}  />
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmailg">
        <Form.Label>Insert Image</Form.Label>
        <Form.Control type="file" name='imgurl' onChange={handelImage} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}

export default Insert;