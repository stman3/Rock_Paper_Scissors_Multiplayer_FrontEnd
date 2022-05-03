import React from "react";
import { useNavigate } from "react-router-dom";



const Lobby =(props)=>{
    let navigate = useNavigate()
    props.players.map(p=>console.log(p.PlayerName))


    return(
        <div>
            <div>Lobby</div>
            <div>
                <ul>
                    <h1>list of players:</h1>
                    
                </ul>
            </div>
            <button onClick={()=>navigate('/Game')}>Game</button>
        </div>
    )
}


export default Lobby