import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import Lobbybutton from "../componet/Lobbybutton";
import ChatBox from "../componet/ChatBox";




const Lobby =(props)=>{
    let navigate = useNavigate()
    const [messages,setmessages] = useState([])
    const [newMessage,setMessage] = useState('')
    const [State,setState]=useState('NotReady')
    
    

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
                PlayersocketID: props.player.socketID,
                PlayerName:props.player.PlayerName,
                Message:newMessage

            })
        }
        const SendState=()=>{
            props.socket.emit('Send_State',{
                PlayerRoomNo:props.playerRoomNo,
                PlayerState: !props.player.playerState
            })
            props.player.playerState=!props.player.playerState
            props.player.playerState ? setState('Ready'):setState('NotReady')
        }
        
        useEffect(()=>{
            props.socket.on('receive_message',(data)=>{
                setmessages((list)=>[...list,data])
            })
            props.socket.on('recive_State',(data)=>{
                props.Setplayers(data.Players)
            })
            props.socket.on('receive_start_Room',(data)=>{
                setTimeout(()=>{
                    navigate('/Game')
                },1000)
            })
          },[props.socket]) 



        //<li key={p.socketID}><div id="Playerli">{p.playerState}</div> {p.PlayerName}</li>
        const handleMessageChange = (event)=>{
            setMessage(event.target.value)
          }
         const handleButtonStart=()=>{
            var AllReady = true
            props.players.forEach((p)=>{
              if(p.playerState===false){
                AllReady = false
            }
            })
            if(AllReady&&props.players.length>1){
                props.socket.emit('send_StartRoom',{
                    PlayerRoomNo:props.playerRoomNo,
                })
            }

          }

    return(
        <div>
            <div>Lobby</div>
            <div>
                <ul id="listPlayer">
                    <h1>list of players:</h1>
                   {props.players.map((p)=>{
                      return (<li id="PlayerInfoContainer" key={p.socketID}>
                          <div id="PlayerInfoChild1">{(p.playerState ? 'Ready': "NotReady")}</div>
                          <div id="PlayerInfoChild2">{p.PlayerName}</div>
                          </li>
                      )
                   })}
                </ul>
            </div>
            <Lobbybutton Rank={props.player.playerRank} SendState={SendState} buttonState={State} buttonStart={handleButtonStart}/>
            <ChatBox handleMessageChange={handleMessageChange} sendMessage={sendMessage} messages={messages}/>

        </div>
    )
}


export default Lobby