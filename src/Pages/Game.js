import React, { useState, useEffect } from "react";

const CH=[]
let Pch
const Game = (props) => {

    useEffect(() => {
        props.socket.on('receive_Player_Ch',(data)=>{
            CH.push(data)
            if(CH.length>1){
                if((CH[0]==="Rock"&&CH[1]==="Rock")||(CH[0]==="Scissors"&&CH[1]==="Scissors")||(CH[0]==="Paper"&&CH[1]==="Paper")){
                    console.log('Drwa')
                    const btn = document.createElement("button")
                    btn.innerHTML = "Click Me";
                    btn.addEventListener('click',restart)
                    const ds = document.getElementById("s")
                    ds.appendChild(btn)
                    CH.pop()
                    CH.pop()
                    
                }
            }
        })
    }, [props.socket])
    const restart=()=>{
        const hpBtns = document.querySelectorAll(".endbtn button");
        hpBtns.forEach(button=>{
            button.disabled=false
        })
        const ds = document.getElementById("s")
        ds.removeChild(ds.firstChild)
    }
    const Scissors =()=>{
        const hpBtns = document.querySelectorAll(".endbtn button");
        hpBtns.forEach(button=>{
            button.disabled=true
        })
        props.socket.emit('send_Player_Ch',{
            PlayerRoomNo:props.playerRoomNo,
            PlayerCh: "Scissors"
        })
        Pch="Scissors"
    }
    const Rock=()=>{
        const hpBtns = document.querySelectorAll(".endbtn button");
        hpBtns.forEach(button=>{
            button.disabled=true
        })
        props.socket.emit('send_Player_Ch',{
            PlayerRoomNo:props.playerRoomNo,
            PlayerCh: "Rock"
        })
        Pch="Rock"
    }
    const Paper=()=>{
        const hpBtns = document.querySelectorAll(".endbtn button");
        hpBtns.forEach(button=>{
            button.disabled=true
        })
        props.socket.emit('send_Player_Ch',{
            PlayerRoomNo:props.playerRoomNo,
            PlayerCh: "Paper"
        })
        Pch="Paper"
    }


    return (
        <div className="game">
            <div className="endbtn">
            <button onClick={Rock}>Rock</button>
            <button onClick={Paper}>Paper</button>
            <button onClick={Scissors}>Scissors</button>
            </div>
            <div  id="s">

            </div>
        </div>

    )
}


export default Game