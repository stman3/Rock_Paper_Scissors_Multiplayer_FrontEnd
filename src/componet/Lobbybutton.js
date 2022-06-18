import React from "react"


const Lobbybutton =({Rank,SendState,buttonState,buttonStart})=>{
    if(Rank==="admin"){
        return <div><button onClick={buttonStart}>Start</button><button onClick={SendState}>{buttonState}</button></div>
    }
    else{
        return <button onClick={SendState}>{buttonState}</button>
    }

}

export default Lobbybutton
