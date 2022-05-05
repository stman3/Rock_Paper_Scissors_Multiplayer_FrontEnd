import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";



const Lobby =(props)=>{
    let navigate = useNavigate()
    const [playerRoomNo,SetplayerRoomNo]= useState('')
    useEffect(()=>{
        props.socket.on("PlayerRoomNo",(data)=>{
            console.log(data)
        })
    },[])

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