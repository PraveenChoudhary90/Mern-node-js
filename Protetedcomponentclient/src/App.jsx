import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Service from './Service'
import About from './About'
import Placement from './Placement'
import Login from './Login'
import Contact from './Contact'
import Proctoted from './Protected'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path='service' element={<Proctoted Component={Service} />}/>
      <Route path="about" element={<Proctoted Component={About} />}/>
      <Route path='contact' element={<Proctoted Component={Placement} />}/>
      <Route path='login' element={<Login/>}/>
      <Route path='contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App