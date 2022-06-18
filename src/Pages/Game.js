import React, { useState, useEffect } from "react";

const CH=[]
var Pch
const Game = (props) => {

    useEffect(() => {
        props.socket.on('receive_Player_Ch',(data)=>{
            CH.push(data)
            if(CH.length>1){
                if((CH[0]==="Rock"&&CH[1]==="Rock")||(CH[0]==="Scissors"&&CH[1]==="Scissors")||(CH[0]==="Paper"&&CH[1]==="Paper")){
                    console.log('Drwa')
                    alert("draw")
                    CH.pop()
                    CH.pop() 
                }else if((CH[0]==="Rock"&&CH[1]==="Paper")||(CH[0]==="Paper"&&CH[1]==="Rock")){
                    if(Pch==="Paper"){
                        alert("You win")
                    }else{
                        alert("You lose")
                    }
                    CH.pop()
                    CH.pop() 
                }else if((CH[0]==="Rock"&&CH[1]==="Scissors")||(CH[0]==="Scissors"&&CH[1]==="Rock")){
                    console.log('Rock')
                    if(Pch==="Rock"){
                        alert("You win")
                    }else{
                        alert("You lose")
                    }
                    CH.pop()
                    CH.pop() 
                }else if((CH[0]==="Paper"&&CH[1]==="Scissors")||(CH[0]==="Scissors"&&CH[1]==="Paper")){
                    if(Pch==="Scissors"){
                        alert("You win")
                    }else{
                        alert("You lose")
                    }
                    CH.pop()
                    CH.pop() 
                }
                if(props.player.playerRank==="admin"){
                    const btn = document.createElement("button")
                    btn.innerHTML = "Restart ";
                    btn.addEventListener('click',restart)
                    const ds = document.getElementById("s")
                    ds.appendChild(btn)
                }
            }
        })
        props.socket.on('receive_Restart',(data)=>{
            restarts()
        })
    }, [props.socket])
    const restart=()=>{
        const hpBtns = document.querySelectorAll(".endbtn button");
        hpBtns.forEach(button=>{
            button.disabled=false
        })
        const ds = document.getElementById("s")
        ds.removeChild(ds.firstChild)
        props.socket.emit('send_Restart',{
            PlayerRoomNo:props.playerRoomNo,
            PlayerCh: "Scissors"
        })
    }

    const restarts=()=>{
        console.log('restartsss')
        const hpBtns = document.querySelectorAll(".endbtn button");
        hpBtns.forEach(button=>{
            button.disabled=false
        })
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