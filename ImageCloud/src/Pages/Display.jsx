import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Display() {
    const [mydata, setMydata]= useState([]);

    const loaddata = async()=>{
        const api = "http://localhost:8000/Cloud/Displaydata";
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loaddata();
    },[])

    const ans  =mydata.map((key)=>{
        return(
            <>
            <tr>
                <td><img src={key.imgurl} alt="" width="200px" height="200px"/></td>
                <td>{key.name}</td>
                <td>{key.rollno}</td>
                <td>{key.city}</td>
            </tr>
            </>
        )
    })
  return (
    <>
    
    <h1>Display page</h1>
    <table>
        <tr>
            <th></th>
            <th>name</th>
            <th>rollno</th>
            <th>city</th>
        </tr>
        {ans}
    </table>
    
    
    </>
  )
}

export default Display