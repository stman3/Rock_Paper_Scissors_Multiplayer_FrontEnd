import React, {useState,useEffect} from "react"
//import { useNavigate } from "react-router-dom";
import Lobbybutton from "../componet/Lobbybutton";




const Lobby =(props)=>{
    //let navigate = useNavigate()
    const [messages,setmessages] = useState([])
    const [newMessage,setMessage] = useState('')

        props.socket.on("PlayerRoom",(data)=>{
            props.Setplayers(data.Players)
            const playerNewState = data.Players.find(p=>p.socketID===props.player.socketID)
            console.log("after")
            props.Setplayer(playerNewState)
            console.log("afterstate")
        })

        const sendMessage = ()=>{
            props.socket.emit('send_message',{
                PlayerRoomNo:props.playerRoomNo,
                PlayerName:props.player.PlayerName,
                Message:newMessage

            })
        }


        useEffect(()=>{
            props.socket.on('receive_message',(data)=>{
                setmessages((list)=>[...list,data])
            })
          },[props.socket]) 



        //<li key={p.socketID}><div id="Playerli">{p.playerState}</div> {p.PlayerName}</li>
        const handleMessageChange = (event)=>{
            setMessage(event.target.value)
          }

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
            <div id="Contener_Chat">
                <div id="Contener_Message">{messages.map((mes)=>{
                    return <p id="Message">{mes.PlayerName}: {mes.Message}</p>
                })}</div>
                <input placeholder="Message..." onChange={handleMessageChange}/><button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}


export default Lobby