
import axios from "axios"

const App = ()=>{

const Handelhome =async ()=>{

  let api = "http://localhost:8000/home";
  try {
    let res = await axios.get(api);
    console.log(res);
    
  } catch (error) {
    console.log(error)
  }

}


  return(
    <>
    <h1>Welcome to our home page</h1>
    <button onClick={Handelhome} >  Home click</button>
    
    </>
  )
}

export default App