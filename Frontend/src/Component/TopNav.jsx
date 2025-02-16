import { Outlet } from "react-router-dom";
import Layout from "../Layout";
import Footer from "./Footer";

const TopNav = ()=>{
    return(
        <>
        <Layout/>
        <main id="MyData"><Outlet/></main>
        <Footer/>

        </>
    )
}
export default TopNav;