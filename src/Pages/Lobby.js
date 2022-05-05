import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";



const Lobby =(props)=>{
    let navigate = useNavigate()

    useEffect(()=>{
        props.socket.on("PlayerRoomNo",(data)=>{
            console.log(data)
            props.Setplayers(data)
            console.log('-------------------')
            console.log(props.Players.Players[0].PlayerName)

            console.log('-------------------')
            console.log(`the player name is ${props.player.PlayerName}`)
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