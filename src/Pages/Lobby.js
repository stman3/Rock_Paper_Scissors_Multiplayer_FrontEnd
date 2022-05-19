import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Lobbybutton from "../componet/Lobbybutton";



const Lobby =(props)=>{
    let navigate = useNavigate()

    useEffect(()=>{
        props.socket.on("PlayerRoom",(data)=>{
            props.Setplayers(data.Players)
        })
    },[])


    return(
        <div>
            <div>Lobby</div>
            <div>
                <ul>
                    <h1>list of players:</h1>
                   {props.players.map((p)=>{
                      return <li key={p.socketID}>{p.playerState} {p.PlayerName}</li>
                   })}
                </ul>
            </div>
            <Lobbybutton Rank={props.player.playerRank}/>
            
        </div>
    )
}


export default Lobby