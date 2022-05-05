import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";


const enterRoom=(PlayerName,playerRoom,navigate,props)=>{
    if(PlayerName&&playerRoom){
        props.SetplayerRoomNo(playerRoom)
        const newPlayer={
            PlayerName:PlayerName,
            roomNo:playerRoom,
            playerRank:"",
            playerPoint:0
        }
        props.socket.emit("join_room",{newPlayer})
        props.socket.on("getplayer",(data)=>{
            console.log(`from get player ${data}`)
            props.Setplayer(data)
            console.log(`the player name is ${props.player}`)
        })
       navigate('/Lobby')
    }
    else(
        alert('Name is empty Or The Room number is worng!')
    )
}






const Home =(props)=>{
    let navigate = useNavigate();
    const [PlayerName,SetPalyerName] = useState('')
    const [playerRoom,SetplayerRoom] = useState('')
    const [playerOnline,SetplayerOnline]= useState('')


    useEffect(()=>{
        props.socket.on("GetPlayerCount",(data)=>{
            SetplayerOnline(data)
        })
    },[])

    const  handleNumberChange=(event)=>{
        SetPalyerName(event.target.value)
      }

      const  handleRoomChange =(event)=>{
        SetplayerRoom(event.target.value)
      }


    return(
        <div id="Home">
            <div id="CountPlayer">OnlinePlayer: {playerOnline}</div>
            <h1>UserName</h1>
            <input value={PlayerName} placeholder="Enter UserName" onChange={handleNumberChange} />
            <input value={playerRoom} placeholder="Enter The Number Room" onChange={handleRoomChange}/>
            <button onClick={()=> enterRoom(PlayerName,playerRoom,navigate,props)}>Join Room</button>
        </div>
    )
}







export default Home