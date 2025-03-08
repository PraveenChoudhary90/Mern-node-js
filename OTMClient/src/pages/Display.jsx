import axios from "axios";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";


const Display = ()=>{
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();

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
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>
                {
                    key.bookid.map((key1)=>{
                        return(
                            <>
                            {key1.bookname}
                            {key1.price}
                            <img src={`http://localhost:8000/uploads/${key1.image}`} width="100px" heigh="100px" alt="" />
                            </>
                        )
                    })
                }
            </td>
            <td>
                <button href="#" onClick={()=>{navigate(`/addnewbook/${key._id}`)}}>Add New Book</button>
                </td>
        </tr>
        
        </>
    )
  })

    return(
        <>
        <h1>Display page</h1>
        <table>
            <tr>
                <th>Author Name</th>
                <th>Email</th>
                <th>BookName/Price</th>
                <th>Add new Book</th>
            </tr>
        {ans}
        </table>
        </>
    )
}
export default Display;