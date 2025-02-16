
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Layout'
import Display from './Pages/Display'
import Login from './Pages/Login'
import Registration from './Pages/Resigtration'

function App() {
  

     return (
        <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path='home' element={<Home/>}/>
     <Route path='display' element={<Display/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='registration' element={<Registration/>}/>

    </Route>

   </Routes>
  
    </BrowserRouter>
    </>
  )
}

export default App
