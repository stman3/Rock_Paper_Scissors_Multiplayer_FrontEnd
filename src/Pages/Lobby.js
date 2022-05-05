import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";



const Lobby =(props)=>{
    let navigate = useNavigate()

    console.log(props.playerRoomNo)

    useEffect(()=>{
        console.log('hellosss')

    },[props.socket])


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