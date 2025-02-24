
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import DoctorRegistraction from './pages/Registraction'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='registration' element={<DoctorRegistraction/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
