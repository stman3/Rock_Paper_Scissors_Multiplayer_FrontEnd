import React from "react"


const Lobbybutton =({Rank,SendState,buttonState,buttonStart})=>{
    console.log(Rank)
    if(Rank==="admin"){
        return <div><button onClick={buttonStart}>Start</button><button onClick={SendState}>{buttonState}</button></div>
    }
    else{
        return <button onClick={SendState}>{buttonState}</button>
    }

}

export default Lobbybutton
