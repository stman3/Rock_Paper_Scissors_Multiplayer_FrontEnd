import React, {} from "react"
//import { useNavigate } from "react-router-dom";
import Lobbybutton from "../componet/Lobbybutton";




const Lobby =(props)=>{
    //let navigate = useNavigate()


        props.socket.on("PlayerRoom",(data)=>{
            props.Setplayers(data.Players)
            const playerNewState = data.Players.find(p=>p.socketID===props.player.socketID)
            console.log("after")
            props.Setplayer(playerNewState)
            console.log("afterstate")
        })

        //<li key={p.socketID}><div id="Playerli">{p.playerState}</div> {p.PlayerName}</li>
        

    return(
        <div>
            <div>Lobby</div>
            <div>
                <ul id="listPlayer">
                    <h1>list of players:</h1>
                   {props.players.map((p)=>{
                      return (<li id="PlayerInfoContainer" key={p.socketID}>
                          <div id="PlayerInfoChild1">{p.playerState}</div>
                          <div id="PlayerInfoChild2">{p.PlayerName}</div>
                          </li>
                      )
                   })}
                </ul>
            </div>
            <Lobbybutton Rank={props.player.playerRank}/>
            
        </div>
    )
}


export default Lobby