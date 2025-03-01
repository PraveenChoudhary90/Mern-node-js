
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Registration from './Pages/Registration'
import Login from './Pages/Login'
import Dashboard from './Dashboard'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout/>} >
     <Route index element={<Home/>}/>
     <Route path='home' element={<Home/>}/>
     <Route path='Registration' element={<Registration/>}/>
     <Route path='login' element={<Login/>}/> 
     </Route>
     </Routes>
     <Routes>
      <Route path='dashboard' element={<Dashboard/>}>

      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
