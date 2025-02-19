
import './App.css'
import axios from "axios"

function App() {
  const HandelHome =async ()=>{
      const api = "http://localhost:8000/home";
      try {
         let res = await axios.get(api);
      console.log(res);
        
      } catch (error) {
        alert(error.response.data)
        
      }
     
  }

   const Handelbutton1 =async ()=>{
      const api = "http://localhost:8000/about";
      let res = await axios.get(api);
      console.log(res);
  }
   const HandelService =async ()=>{
      const api = "http://localhost:8000/service";
      try {
        let res = await axios.get(api);
      console.log(res);
      } catch (error) {
        alert(error.response.data.msg)
        
      }
      
  }
  

  return (
    <>
    <h1>Welcome to our Middleware</h1>
    <button onClick={HandelHome}>Home button</button>
    <button onClick={Handelbutton1 }>About button</button>
    <button onClick={HandelService}>Service button</button>
    </>
  )
}

export default App
