import { Outlet } from "react-router-dom";
import TopNav from "./Component/Topnav";

const Layout = ()=>{
    return(
        <>
        <TopNav/>
        <main style={{margin:"40px"}}><Outlet/></main>
        <hr size="5" color="red"   />
        <h1 style={{backgroundColor:"lightblue" , padding:"50px", textAlign:"center"}} >www.mycompnay.com</h1>
        </>
    )
}

export default Layout;