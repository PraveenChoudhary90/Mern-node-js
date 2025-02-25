import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useEffect } from "react";
import { useState } from 'react';
import BACK_URL from "../config";

const Home = ()=>{
    const [mydata, setmydata]= useState([]);

    const Loaddata = async()=>{
        const api = `${BACK_URL}/doctor/DoctorDisplay`;
  try {
    const response = await axios.get(api)
    console.log(response.data);
    setmydata(response.data);
  } catch (error) {
   console.log(error) 
  }

    }

    useEffect(()=>{
        Loaddata()
    },[])


    const ans = mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.number}</td>
                <td>{key.address}</td>
                <td>{key.city}</td>
                <td>{key.specailization}</td>
            </tr>
            
            </>
        )
    })
    return(
        <>
        <h1>Welcome to my Home page</h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Doctor Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Address</th>
          <th>City</th>
          <th>Spicilation</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}

export default Home;