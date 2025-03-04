import Footer from "./compnent/Footer";
import TopNav from "./compnent/TopNav";
import {Outlet} from "react-router-dom"

const Layout = ()=>{
    return(
    <>
    <TopNav/>
    <main style={{margin:"40px"}} ><Outlet/></main>
    <Footer/>
    </>
    )
}

export default  Layout;