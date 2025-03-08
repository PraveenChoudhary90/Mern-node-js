import axios from "axios";
import { useEffect, useState } from "react";


const Display = ()=>{
    const [mydata, setMydata] = useState([]);

    const loadData = async ()=>{
        const api  = "http://localhost:8000/AutherBook/Display";
        const response  = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    },[])

  const ans = mydata.map((key)=>{
    return(
        <>
        <tr>
            <td></td>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.bookname}</td>
            <td>{key.price}</td>
        </tr>
        
        </>
    )
  })

    return(
        <>
        <h1>Display page</h1>
        {ans}
        </>
    )
}
export default Display;