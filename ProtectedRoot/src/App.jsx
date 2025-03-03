
import './App.css'
import Layout from './Layout'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Registration from './Pages/Registraction'
import Contact from './Pages/Contact'
import Placement from './Pages/Placement'
import Login from './Pages/Login'
import Protected from './Pages/Protected'
function App() {
 
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='home' element={<Home/>}/>
  <Route path='about' element={<Protected Component={About}/>}/>
  <Route path='registration' element={<Registration />}/>
  <Route path='contact' element={< Protected Component={Contact} />}/>
  <Route path='placement' element={<   Protected Component={Placement} />}/>
  <Route path='login' element={<Protected Component={Login} />}/>
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
