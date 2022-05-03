import React from "react";
import { useNavigate } from "react-router-dom";





const Home =()=>{
    let navigate = useNavigate();
    return(
        <div>
        <div>Home</div>
        <button onClick={()=>navigate('/Lobby')}>Go to the Lobby Page</button>
        </div>
    )
}



export default Home