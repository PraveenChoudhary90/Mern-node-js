import { useState, useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const Display=()=>{
  const [mydata, setMydata] = useState([]);


  const loadData=async()=>{
    let api="http://localhost:8000/Images/DisplayData";
    const response = await axios.get(api);
    setMydata(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    loadData();
  }, [])

 const ans=mydata.map((key)=>{
  return(
    <>
      <tr>
       <td>
       {key.images.map((key1)=>{
           return(
            <>
               <img src={`http://localhost:8000/${key1}`}  width="90px" height="90px" />
               <br/>
            </>
           )
        })}

       </td>
        <td> 
       


          <img src={`http://localhost:8000/${key.defaultImage}`} width="300" height="300" />
           </td>
        <td> {key.name} </td>
        <td> {key.brand} </td>
        <td> {key.price} </td>
      </tr>
    </>
  )
 })

  return(
    <>
      <h1> Display Data</h1>
      <hr />
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Product</th>
          <th>Picture</th>
          <th>Product Name</th>
          <th>Product Brand</th>
          <th>Product Price</th>
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