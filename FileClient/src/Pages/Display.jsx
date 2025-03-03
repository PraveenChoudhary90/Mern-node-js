import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import Table from 'react-bootstrap/Table';
const Display = ()=>{
    const [mydata, setMydata]= useState([]);


    const Loaddata = async()=>{
        const api = "http://localhost:8000/File/DataDisplay";
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        Loaddata();
    },[])

    const ans = mydata.map((key)=>{
        return(
            <>
           <tr>
            <td><img src={key.imgurl} width="100px" height="100px" alt="" /></td>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
           </tr>
            </>
        )
    })
    return(
        <>
        <h1>DIsplay page</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Rollnumber</th>
          <th>Name</th>
          <th>City</th>
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