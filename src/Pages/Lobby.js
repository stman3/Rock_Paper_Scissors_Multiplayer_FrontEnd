import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import Lobbybutton from "../componet/Lobbybutton";



const Lobby =(props)=>{
    let navigate = useNavigate()


        props.socket.on("PlayerRoom",(data)=>{
            props.Setplayers(data.Players)
            console.log(props.player.playerRank)
            //const playerNewState = data.Players.find(p=>p.socketID===props.player.socketID)
           // console.log("after")
            //props.Setplayer(playerNewState)
            //console.log("afterstate")

        })
 //<Lobbybutton Rank={props.player.playerRank}/>



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
          
            
        </div>
    )
}


export default Lobby