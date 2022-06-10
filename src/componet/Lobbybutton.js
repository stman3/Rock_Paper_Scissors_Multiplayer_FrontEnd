import React from "react"


const Lobbybutton =({Rank,SendState,buttonState})=>{
    console.log(Rank)
    if(Rank==="admin"){
        return <div><button>Start</button><button onClick={SendState}>{buttonState}</button></div>
    }
    else{
        return <button onClick={SendState}>{buttonState}</button>
    }

}

export default Lobbybutton
