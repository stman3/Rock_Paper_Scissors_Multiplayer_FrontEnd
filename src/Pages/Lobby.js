import React from "react";
import { useNavigate } from "react-router-dom";



const Lobby =()=>{
    let navigate = useNavigate()
    return(
        <div>
            <div>Lobby</div>
            <button onClick={()=>navigate('/Game')}>Game</button>
        </div>
    )
}


export default Lobby