
import { useEffect } from "react";
import {useNavigate} from "react-router-dom"


const Protected = ({Component})=>{
    const navigate = useNavigate();
  useEffect(()=>{
        if(!localStorage.getItem("username")){
            navigate("/home")
        }
    },[])

    return(
        <>
        
        {/* <h1>Welcome to Protected page</h1> */}
        <Component/>
        </>
    )
}

export default Protected;