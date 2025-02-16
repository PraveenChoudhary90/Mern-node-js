import { Outlet } from "react-router-dom";
import TopNav from "./Component/Topnav";
import Footer from "./Component/Footer";


const Layout = ()=>{
    return(
        <>
        <TopNav/>
        <main id="mydata"><Outlet/></main>
        <Footer/>
        </>
    )
}
export default Layout;