import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
const Insert = ()=>{
   const [input, setInput] = useState({});
   const [SelectFile, setSelectFile ] = useState("");


   const handelInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values, [name]:value}))
    console.log(input);
   }

   const handelFile =(e)=>{
    let files = e.target.files[0];
    setSelectFile(files)
   

   }

   const handelSubmit = async(e)=>{
    e.preventDefault();
     const formData = new FormData();
    formData.append("file", SelectFile);
    formData.append("upload_preset", "praveen");
    formData.append("cloud_name", "drdjcmgtx");
    const api = "https://api.cloudinary.com/v1_1/drdjcmgtx/image/upload";
    const response = await axios.post(api, formData);
    console.log(response.data);
    console.log(response.data.url);

    const api1 = "http://localhost:8000/File/InsertData"
    const res = await axios.post(api1, {imgurl:response.data.url, ...input});
    console.log(res.data);
    alert("data save")
    

   }





    return(
        <>
        <Form style={{width:"500px", margin:"auto"}} >
        <h1>Insert page here</h1>

       <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Rollnumber</Form.Label>
        <Form.Control type="text" name='rollno'  onChange={handelInput} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" name='name'  onChange={handelInput} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmailv">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city'  onChange={handelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Insert Image</Form.Label>
        <Form.Control type="file" name='imgurl' onChange={handelFile} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insert;