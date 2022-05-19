import React from "react"


const Lobbybutton =({Rank})=>{
    console.log(Rank)
    if(Rank==="admin"){
        return <div><button>Start</button><button>Ready</button></div>
    }
    else{
        return <button>Ready</button>
    }

}

export default Lobbybutton
