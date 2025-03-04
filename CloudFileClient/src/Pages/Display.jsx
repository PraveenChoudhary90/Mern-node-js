import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

const Display = ()=>{
    const [mydata, setMydata] = useState([]);

const loaddata = async ()=>{
    const api = "http://localhost:8000/Image/Displaydata";
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
}

useEffect(()=>{
      loaddata();
},[])


const ans = mydata.map((key)=>{
    return(
        <>
        <tr>
            <td><img src={`http://localhost:8000/uploads/${key.imgurl}`} width="200px" height="200px" alt="" /></td>
            <td>{key.empno}</td>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.city}</td>
            <td>{key.salary}</td>
            <td>{key.designation}</td>
        </tr>
        </>
    )
})
    return(
        <>
        <h1>Welcome to dispaly page</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Employee no</th>
          <th>Employee Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Salary</th>
          <th>Designation</th>
          
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}

export default Display;