import React, {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";


const enterRoom=(PlayerName,playerRoom,navigate,props)=>{
    console.log(`try to join to the room ${playerRoom}`)
    if(PlayerName&&playerRoom){
        const newPlayer ={
            PlayerName:PlayerName,
            playerPoint:0,
            playerRank:'admin',
            playerRoom:playerRoom
        }
        props.socket.emit('join_room',newPlayer,cb=>{
            props.Setplayers(props.players.concat(cb))
        })
    }
    else(
        alert('Name is empty Or The Room number is worng!')
    )
}




const Home =(props)=>{
    let navigate = useNavigate();
    const [PlayerName,SetPalyerName] = useState('')
    const [playerRoom,SetplayerRoom] = useState('')


    const  handleNumberChange=(event)=>{
        console.log(`number: ${event.target.value}`)
        SetPalyerName(event.target.value)
      }

      const  handleRoomChange =(event)=>{
        console.log(`Room: ${event.target.value}`)
        SetplayerRoom(event.target.value)
      }


    return(
        <div>
            <h1>UserName</h1>
            <input value={PlayerName} placeholder="Enter UserName" onChange={handleNumberChange} />
            <input value={playerRoom} placeholder="Enter The Number Room" onChange={handleRoomChange}/>
            <button onClick={()=> enterRoom(PlayerName,playerRoom,navigate,props)}>Enter The Room</button>
        </div>
    )
}







export default Home