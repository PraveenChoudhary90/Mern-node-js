import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Display = ()=>{
    const [val, setval] = useState([]);

   const loadData = async()=>{
    const api = "http://localhost:8000/employee/displaydata";
     axios.get(api).then((res)=>
        {
        alert("display data");
        setval(res.data);
     })
    
   }

   useEffect(()=>{
    loadData();
   },[])
  
 let sno = 0;
   const ans = val.map((key,index)=>{
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
        </tr>
        </>
    )
   })


    return(
        <>
        <h1>Display Page</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Employee No</th>
          <th>Employee Name</th>
          <th>Employee Designation</th>
          <th>Employee City</th>
          <th>Employee Salary</th>
        </tr>
        {ans}
      </thead>
      </Table>
        
        </>
    )
}

export default Display;