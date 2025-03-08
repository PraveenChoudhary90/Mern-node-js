import axios from 'axios';
import React, { useEffect, useState } from 'react'

function BookDisplaydata() {
    const [mydata, setMydata]= useState([]);


const loaddata =async()=>{
    const api = "http://localhost:8000/AutherBook/NewBookDisplay";
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
            <td>{key.bookname}</td>
            <td>{key.price}</td>
            <td>
                <img src={`http://localhost:8000/uploads/${key.image}`} width="200px" height="200px" alt="" />
            </td>
            <td>{key.autherid.name}</td>
            <td>{key.autherid.email}</td>
        </tr>
        
        </>
    )
  })

  return (
<>
<h1>Welcome book data page</h1>

<table>
    <tr>
        <th>BookName</th>
        <th>Price</th>
        <th>Images</th>
        <th>Name</th>
        <th>Email</th>
    </tr>
    {ans}
</table>


</>
)
}

export default BookDisplaydata