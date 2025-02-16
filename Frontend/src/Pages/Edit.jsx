import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";

const Edit = ()=>{
    const navigate = useNavigate();
    const {id}= useParams();
    const [mydata,setmydata]=useState({});


    const HandelChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setmydata(pre=>({...pre,[name]:value}));
        
    }

   const loadData = ()=>{
        const api = "http://localhost:8000/employee/getinfromdata";
        axios.post(api,{id:id}).then((res)=>{
            setmydata(res.data);
        })
    }

    useEffect(()=>{
    loadData()
    },[])




   
      const HandelSubmit = async (e) => {
        e.preventDefault();
        let api = "http://localhost:8000/employee/savedata";
        axios.post(api, mydata).then((res) => {
            alert("Data Updated Successfully")
            navigate("/update")
        })
    }

    

    return(
        <>
        <div id="myfrom">
        <h1>Edit data  Page</h1>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Number</Form.Label>
        <Form.Control type="text" name='empno' value={mydata.empno} onChange={HandelChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type=""text  name='name' value={mydata.name} onChange={HandelChange} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassworda">
        <Form.Label>Employee Designation</Form.Label>
        <Form.Control type=""text  name='designation' value={mydata.designation} onChange={HandelChange} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordb">
        <Form.Label>Employee City</Form.Label>
        <Form.Control type=""text  name='city' value={mydata.city} onChange={HandelChange} />
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordc">
        <Form.Label>Employee Salary</Form.Label>
        <Form.Control type=""text  name='salary' value={mydata.salary} onChange={HandelChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        
        </>
    )
}

export default Edit;