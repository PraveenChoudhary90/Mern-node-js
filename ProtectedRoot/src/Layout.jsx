import {Link, Outlet} from "react-router-dom";
const Layout = ()=>{
    return(
        <>
        <Link to="/home">Home</Link>!!
        <Link to="registration"  >Registration</Link>!!
        <Link to="about">About</Link>!!
        <Link to="placement">Placement</Link>!!
        <Link to="login" >Login</Link>!!
        <Link to="contact">Contact</Link>!!

        <main style={{margin:"50px"}}>
            <Outlet/>
        </main>
        www.mycompany.com
        </>
    )
}

export default Layout;