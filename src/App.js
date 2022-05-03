import './App.css';
import React, {useState} from "react"
import io from 'socket.io-client'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home'
import Game from './Pages/Game'
import Lobby from './Pages/Lobby'
import ErrorPage from './Pages/ErrorPage'

const socket = io.connect('http://192.168.8.122:3001')
const player=null

const App =()=> {
  const {players,Setplayers} = useState([])
  return (
   <Router>
     <Routes>
       <Route path='/' element={<Home socket={socket} player={player}/>}/>
       <Route path='/Lobby' element={<Lobby socket={socket} players={players} Setplayers={Setplayers} player={player}/>}/>
       <Route path='/Game' element={<Game socket={socket} players={players} Setplayers={Setplayers} player={player}/>}/>
       <Route path='*' element={<ErrorPage/>}/>
     </Routes>
   </Router>
  )
 
}

export default App;
