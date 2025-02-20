import { Outlet } from "react-router-dom";
import Topnav from "./COmponent/Topnav";
import Footer from "./COmponent/Footer";


const Layout = ()=>{
    return(
        <>
        <Topnav/>
        <main id="mydata" ><Outlet/></main>
        <Footer/>
        
        </>
    )
}

export default Layout;