
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import Insert from './pages/Insert'
import Display from './pages/Display'
import AddNewBook from './pages/AddNewBook'

function App() {


  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='home' element={<Home/>}/>
  <Route path='insert' element={<Insert/>}/>
  <Route path='display' element={<Display/>}/>
  <Route path='addnewbook/:id' element={<AddNewBook/>}/>

  </Route>
 </Routes>
 
 </BrowserRouter>
    </>
  )
}

export default App
