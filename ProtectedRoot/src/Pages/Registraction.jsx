import { useEffect } from "react";
import { useState } from "react";

import {useNavigate} from "react-router-dom"


const Registration = ()=>{
    const [input, setInput] = useState("");
    const navigate = useNavigate();


    const handelSubmit = ()=>{
        console.log(input);
        localStorage.setItem("username",input)
        navigate("/home")
    }
    // useEffect(()=>{
    //     if(localStorage.getItem(input)){
    //     navigate("/home")
    //     }
    // },[])
    return(
        <>
        
        <h1>Welcome to Registration page</h1>
        Enter Name :<input type="text" name="name" onChange={(e)=>{setInput(e.target.value)}} /><br></br>
        Enter Email :<input type="text" name="email"  /><br></br>
        Enter Password :<input type="text" name="password"/><br></br>
        <button onClick={handelSubmit}>Submit</button>
        </>
    )
}

export default Registration;