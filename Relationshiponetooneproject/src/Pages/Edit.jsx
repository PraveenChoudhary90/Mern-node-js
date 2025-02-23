import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Edit =()=>{
    const {id} = useParams();
    const [bookname, setbookname] = useState("");
    const [price, setprice] = useState("");


  const hadelSubmit = async()=>{
    const api = "http://localhost:8000/User/editdatasave";
    try {
        const response = await axios.post(api, {id:id, bookname:bookname, price:price})
        console.log(response.data)
        alert("update data suceessfull");
    } catch (error) {
        console.log(error)
    }

  }


    return(
        <>
        <h1>welcome to edit  our page</h1>
        Enter BookName :<input type="text" value={bookname} onChange={(e)=>{setbookname(e.target.value)}} /><br></br>
        Enter BookPrice:<input type="text" value={price} onChange={(e)=>{setprice(e.target.value)}}/><br></br>
        <button onClick={hadelSubmit}  >Save Data!!!</button>
        </>
    )
}

export default Edit;