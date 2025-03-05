import { Outlet } from "react-router-dom";
import TopNav from "./comnponent/TopNav";
import Footer from "./comnponent/Footer";


const Layout = ()=>{
    return(
        <>
        <TopNav/>
        <main style={{margin:"50px"}} ><Outlet/></main>
        <Footer/>
        </>
    )
}

export default Layout;