
import axios from "axios"

const App = ()=>{

const Handelhome =async ()=>{

  let api = "http://localhost:8000/Homepage";
  try {
    const res = await axios.get(api);
    console.log(res);
    
  } catch (error) {
    alert(error.response.data)
  }

}
const Handelabout =async ()=>{

  let api = "http://localhost:8000/Aboutpage";
  try {
    const res = await axios.get(api);
    console.log(res);
    
  } catch (error) {
    alert(error.response.data)
  }

}


  return(
    <>
    <h1>Welcome to our Home page</h1>
    <button onClick={Handelhome} >  Home click</button>
    <button onClick={Handelabout} > About click</button>
    
    </>
  )
}

export default App