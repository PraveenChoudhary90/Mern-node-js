import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
const Display = ()=>{
    const [mydata, setMydata]=useState([]);


    const LoadData = async()=>{
        const api = "http://localhost:8000/Image/Displaydata";
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
useEffect(()=>{
    LoadData();
},[])


const ans = mydata.map((key)=>{
    return(
        <>
        <tr>
            <td><img src={`http://localhost:8000/uploads/${key.imgurl}`} width="100px" height="100px" alt="" /></td>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
        </tr>
        </>
    )
})

    return(
        <>
        <h1>Welcome to Display page</h1>
        <table>
            <tr>
                <th></th>
                <th>Rollnumber</th>
                <th>Name</th>
                <th>City</th>
            </tr>
            {ans}
        </table>
        </>
    )
}

export default Display;