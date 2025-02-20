import { useEffect, useState } from "react";
import axios from "axios"
import Table from 'react-bootstrap/Table';
const Display = ()=>{
    const [mydata, setmydata] = useState([]);

    const Loaddata =async ()=>{
        const api = "http://localhost:8000/User/Display";
        const response =await axios.get(api);
        console.log(response.data);
        setmydata(response.data);
    }
    useEffect(()=>{
        Loaddata()
    },[])


    const ans = mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.firstname}</td>
                <td>{key.lastname}</td>
                <td>{key.userid.username}</td>
                <td>{key.userid.email}</td>
            </tr>
            
            </>
        )
    })
    return(
        <>
        <h1  >Welcome to my Display page</h1>
       
        
         <Table striped bordered hover>
      <thead>
        <tr>
                <th>Frist Name</th>
                <th>Last Name</th>
                <th>User Name</th>
                <th>Email</th>
        </tr>
            {ans}

      </thead>
      </Table>


        
        </>
    )
}

export default Display;