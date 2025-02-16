
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TopNav from './Component/TopNav'
import Home from './Pages/Home'
import Insert from './Pages/Insert'
import Display from './Pages/Display'
import Search from './Pages/Search'
import Salary from './Pages/Salary'
import Update from './Pages/Update'
import Edit from './Pages/Edit'
import Nopage from './Pages/Nopage'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<TopNav/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path='insert' element={<Insert/>}/>
    <Route path='display' element={<Display/>}/>
    <Route path="search" element={<Search/>}/>
    <Route path='salary' element={<Salary/>}/>
    <Route path='update' element={<Update/>}/>
    <Route path='edit/:id' element={<Edit/>}/>
    <Route path='*' element={<Nopage/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
