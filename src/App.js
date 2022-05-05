import './App.css';
import React, {useState} from "react"
import io from 'socket.io-client'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home'
import Game from './Pages/Game'
import Lobby from './Pages/Lobby'
import ErrorPage from './Pages/ErrorPage'

const socket = io.connect('http://192.168.8.122:3001')

const App =()=> {
  const [players,Setplayers] = useState([])
  const [player,Setplayer] = useState({})
  const [playerRoomNo,SetplayerRoomNo]= useState('')
  
  return (
   <Router>
     <Routes>
       <Route path='/' element={<Home playerRoomNo = {playerRoomNo} SetplayerRoomNo={SetplayerRoomNo} Setplayer={Setplayer} socket={socket} player={player} players={players} Setplayers={Setplayers} />}/>
       <Route path='/Lobby' element={<Lobby playerRoomNo = {playerRoomNo} SetplayerRoomNo={SetplayerRoomNo}  Setplayer={Setplayer}  socket={socket} players={players} Setplayers={Setplayers} player={player}/>}/>
       <Route path='/Game' element={<Game  playerRoomNo = {playerRoomNo} SetplayerRoomNo={SetplayerRoomNo} Setplayer={Setplayer}  socket={socket} players={players} Setplayers={Setplayers} player={player}/>}/>
       <Route path='*' element={<ErrorPage/>}/>
     </Routes>
   </Router>
  )
 
}

export default App;
