import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';


const Search = ()=>{
    const [Search, setSearch]=useState([]);
    const [val, setVal]=useState("");
  console.log(val);
    const Submitdata = async()=>{
        let api = "http://localhost:8000/employee/searchdata";
        await axios.post(api, {empno:val}).then((res)=>{
            alert("data is come")
            setSearch(res.data);
        })

    }
  let sno=0;
  console.log(Search);

    const ans = Search.map((key,index)=>
        {
        sno++;
        return(
            <>
            <tr key={index}>
                <td>{sno}</td>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.city}</td>
                <td>{key.salary}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>Search Page</h1>
        Enter EmpNo:<input type="text" name="empno" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
        <button onClick={Submitdata} >Search data</button>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno</th>
          <th>Employee No</th>
          <th>Name</th>
          <th>Designation</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        
        </>
    )
}

export default Search;