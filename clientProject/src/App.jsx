
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
// import Home from './Pages/Home'
// import Layout from './Layout'
// import Display from './Pages/Display'
// import Login from './Pages/Login'
// import Registration from './Pages/Resigtration'
// import Dashboard from './Pages/Dashboard'

import axios from "axios";

function App() {
    const HandelSubmit=async()=>{
      const api = "http://localhost:8000/home";
        let res = await axios.get(api);
        console.log(res);
    }
      const HandelSubmit1=async()=>{
      const api = "http://localhost:8000/about";
        let res = await axios.get(api);
        console.log(res);
    }
      const HandelSubmit2=async()=>{
      const api = "http://localhost:8000/service";
        let res = await axios.get(api);
        console.log(res);
    }

     return (
        <>

        <h1>Welcome to my page</h1>
        <button onClick={HandelSubmit}>Home</button>
        <button onClick={HandelSubmit1}>About</button>
        <button onClick={HandelSubmit2}>Service</button>
     {/* <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path='home' element={<Home/>}/>
     <Route path='display' element={<Display/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='registration' element={<Registration/>}/>
     <Route path="dashboard" element={<Dashboard/>}/>

    </Route>

   </Routes>
  
    </BrowserRouter> */}
    </>
  )
}

export default App
