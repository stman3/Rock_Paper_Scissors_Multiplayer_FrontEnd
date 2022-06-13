import React,{useState,useEffect} from "react";

let GameStart=false
let cellElements
const Game =(props)=>{

    useEffect(()=>{
        if(!GameStart){
            StartUp()
        }
    },[props.socket])



    const StartUp=()=>{
        cellElements = document.querySelectorAll('[data-cell]')
        cellElements.forEach(cell=>{
            cell.addEventListener('click',handleClick,{once:true})
        })
        GameStart=true
    }
    const handleClick=(event)=>{
        console.log('click')
    }
    return(
        <div className="game">
            <div className="board">
               <div className="cell" data-cell></div>
               <div className="cell" data-cell></div>
               <div className="cell" data-cell></div>
               <div className="cell" data-cell></div>
               <div className="cell" data-cell></div>
               <div className="cell" data-cell></div>
               <div className="cell" data-cell></div>
               <div className="cell" data-cell></div>
               <div className="cell" data-cell></div>
            </div>
            <div className="winning-message">
                <div></div>
                <button className="restartButton">Restart</button>
            </div>
        </div>
       
    )
}


export default Game