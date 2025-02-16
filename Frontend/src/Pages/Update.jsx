import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";


const Update = ()=>{


const navigate=useNavigate()
    
    const [input, setinput]= useState([]);
    console.log(input);
    //to get data from database
   const Loaddata= async()=>{
    const api = "http://localhost:8000/employee/getdisplaydata";
     await axios.get(api).then((res)=>{
        //  alert("data is come");
        //  console.log(response);
         setinput(res.data);
    })
   }

   const HandleDelete=(id)=>{
    let api='http://localhost:8000/employee/deletedata';
    axios.post(api,{id:id}).then((res)=>{
       alert(res.data)
       Loaddata()
    })
}

const HandleUpdate = (id)=>{
      navigate(`/edit/${id}`);
}


   useEffect(()=>{
    Loaddata()
   },[])






   let sno=0;
   const ans = input.map((key, index)=>{
    sno++;
    return(
        <>
        <tr key={index}>
            <td>{sno}</td>
            <td>{key.empno}</td>
            <td>{key.name}</td>
            <td>{key.designation}</td>
            <td>{key.city}</td>
            <td>{key.salary}</td>
            <td onClick={()=>HandleDelete(key._id)}>Delete</td>
            <td onClick={()=>HandleUpdate(key._id)}>Update</td>
        </tr>
        </>
    )
   })

    return(
        <>
        <h1>Update Page</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Employee No</th>
          <th>Employee Name</th>
          <th>Employee Designation</th>
          <th>Employee City</th>
          <th>Employee Salary</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {ans}
      </thead>
      </Table>
        </>
    )
}

export default Update;