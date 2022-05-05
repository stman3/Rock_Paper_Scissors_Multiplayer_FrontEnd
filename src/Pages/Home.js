import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";


const enterRoom=(PlayerName,playerRoom,navigate,props)=>{
    console.log(`try to join to the room ${playerRoom}`)
    if(PlayerName&&playerRoom){
        const newPlayer={
            PlayerName:PlayerName,
            playerRoom:playerRoom,
            playerRank:"",
            playerPoint:0
        }
        props.socket.emit("join_room",{newPlayer})
       // navigate('/Lobby')
    }
    else(
        alert('Name is empty Or The Room number is worng!')
    )
}


const printServer=()=>{
    
}




const Home =(props)=>{
    let navigate = useNavigate();
    const [PlayerName,SetPalyerName] = useState('')
    const [playerRoom,SetplayerRoom] = useState('')
    const [playerOnline,SetplayerOnline]= useState('')


    useEffect(()=>{
        props.socket.on("GetPlayerCount",(data)=>{
            SetplayerOnline(data)
            console.log(`data= ${playerOnline}`)
      })

    },[])

    const  handleNumberChange=(event)=>{
        console.log(`number: ${event.target.value}`)
        SetPalyerName(event.target.value)
      }

      const  handleRoomChange =(event)=>{
        console.log(`Room: ${event.target.value}`)
        SetplayerRoom(event.target.value)
      }


    return(
        <div id="Home">
            <div id="CountPlayer">OnlinePlayer: {playerOnline}</div>
            <h1>UserName</h1>
            <input value={PlayerName} placeholder="Enter UserName" onChange={handleNumberChange} />
            <input value={playerRoom} placeholder="Enter The Number Room" onChange={handleRoomChange}/>
            <button onClick={()=> enterRoom(PlayerName,playerRoom,navigate,props)}>Enter The Room</button>
        </div>
    )
}







export default Home