const Home = ()=>{

    
 
    return(
        <>
        
        <h1>Welcome to Home page</h1>
        <button onClick={()=>{localStorage.clear()}}>Logout</button>
        </>
    )
}

export default Home;