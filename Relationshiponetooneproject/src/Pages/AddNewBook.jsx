import { useEffect, useState } from "react";
 import axios from "axios"
 import {useNavigate} from "react-router-dom"
 
const AddnewBook = ()=>{
    const [mydata, setmydata ] = useState([]);
    const navigate = useNavigate();


    const loaddata =async ()=>{
        const api = "http://localhost:8000/User/displaydata";
      try {
    const response = await axios.get(api)
    console.log(response.data);
    setmydata(response.data);
    
    } catch (error) {
    console.log(error)
    }      
    }

  useEffect(()=>{
    loaddata()
  },[])

  const ans = mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.city}</td>
            <td>
                <button onClick={()=>{navigate(`/edit/${key._id}`)}}>Add New Book</button>
            </td>
        </tr>
        </>
    )
  })

    return(
        <>
        <h1>WELCPOME TO DASHBOARD ADD Book</h1>
        <table border="2px" width="500px" >
            <tr border="2px">
                <th>Author name</th>
                <th>Email</th>
                <th>City</th>
                <th>New Add Book</th>
            </tr>
            {ans}
        </table>
        </>
    )
}

export default AddnewBook;