
import './App.css'
import axios from "axios"

function App() {
  const Handelbutton =async ()=>{
      const api = "http://localhost:8000/home";
      let res = await axios.get(api);
      console.log(res);
  }

   const Handelbutton1 =async ()=>{
      const api = "http://localhost:8000/about";
      let res = await axios.get(api);
      console.log(res);
  }
   const Handelbutton2 =async ()=>{
      const api = "http://localhost:8000/service";
      let res = await axios.get(api);
      console.log(res);
  }
  

  return (
    <>
    <h1>Welcome to our Middleware</h1>
    <button onClick={Handelbutton}>Home button</button>
    <button onClick={Handelbutton1 }>About button</button>
    <button onClick={Handelbutton2}>Service button</button>
    </>
  )
}

export default App
