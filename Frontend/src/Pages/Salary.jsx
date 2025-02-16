import axios from "axios";
import { useEffect, useState } from "react";


const Salary = ()=>{

  let[input,setinput]=useState([])
    let sum=0;
    const loading= async()=>{

        const res=await axios.get("http://localhost:8000/employee/displaydata")
        // console.log(res.data)
        setinput(res.data)
        
   
   }

   const Data = input.map(e=>sum+=e.salary)
        console.log(sum)
   
       useEffect(()=>{loading()},[])
    return(
        <>
        <h1>Salary Page</h1>
       <h1>Total Salary:{Data} </h1> 
        
       
        
        </>
    )
}

export default Salary;