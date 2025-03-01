import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DashBoard from "./Pages/Dashboard";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="registration" element={<Registration/>}/> 
          <Route path="login" element={<Login/>}/>   
        </Route>
        </Routes>
         <Routes>
           <Route path="dashboard" element={<DashBoard/>}>
           </Route>
         </Routes>

    </BrowserRouter>
    </>
  )
}
export default App;