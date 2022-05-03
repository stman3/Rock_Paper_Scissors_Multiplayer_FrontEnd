import './App.css';
import React, {useState,useEffect} from "react"
import io from 'socket.io-client'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home'
import Game from './Pages/Game'
import Lobby from './Pages/Lobby'
import ErrorPage from './Pages/ErrorPage'




const App =()=> {

  return (
   <Router>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Lobby' element={<Lobby/>}/>
       <Route path='/Game' element={<Game/>}/>
       <Route path='*' element={<ErrorPage/>}/>
     </Routes>
   </Router>
  )
 
}

export default App;
