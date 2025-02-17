import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard=()=>{
 const navigate= useNavigate();
     useEffect(()=>{
         if (!localStorage.getItem("username") && !localStorage.getItem("useremail"))
         {
            navigate("/login")  
         }
     }, [])
     const logout=()=>{
        localStorage.clear();
        navigate("/login");
     }
    return(
        <>
           <h1> Welcome to my DashBoard</h1>
           Welcome : {localStorage.getItem("username")}
           Email : {localStorage.getItem("useremail")} |
         <span onClick={logout}> <a href="#"> Logout</a> </span>  
        </>
    )
}

export default Dashboard;