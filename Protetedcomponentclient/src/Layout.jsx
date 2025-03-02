

import {Link ,Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <div>
        <Link to="/home">Home</Link>||
        <Link to="/about">About</Link>||
        <Link to="/service">Service</Link>||
        <Link to="/contact" >Contact</Link>||
        <Link to="/login" >Login</Link>
        <hr />
        <br />
        <Outlet/>
        <hr />
        <br />
        www.mycompany.com all right reseverd &copy;

    </div>
  )
}