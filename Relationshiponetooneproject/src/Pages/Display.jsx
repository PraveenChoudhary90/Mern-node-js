import axios from "axios";
import { useEffect, useState } from "react";

import Table from 'react-bootstrap/Table';



const Home = ()=>{
    const [mydata , setmydata]=useState([]);

 const loaddata = async()=>{
        const api = "http://localhost:8000/User/Dispaynewdata";
        try {
            const response = await axios.get(api)
            console.log(response.data);
            setmydata(response.data);
        } catch (error) {
            console.log(error)
        }

 }

 useEffect(()=>{
    loaddata();
 },[])

   const ans = mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.city}</td>
            <td>
                {
                    key.bookid.map((key1)=>{
                        return(
                            <>
                            <tr>
                                <td>BookName:={key1.bookname}</td>
                                <td>BookPrice:={key1.bookprice}</td>
                            </tr>
                            </>
                        )
                    })
                }
            </td>
        </tr>
        </>
    )
   })

    return(
        <>
        
        <h1>Welcome to home </h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>AuthorName</th>
          <th>Email</th>
          <th>City</th>
          <th>Books</th>
        </tr>
        {ans}
      </thead>
      </Table>
        
        </>
    )
}

export default Home;