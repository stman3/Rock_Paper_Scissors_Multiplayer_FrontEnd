import React from "react";



const ChatBox =(props)=>{
return(
    <div id="Contener_Chat">
    <div id="Contener_Message">{props.messages.map((mes)=>{
        return <p id="Message">{mes.PlayerName}: {mes.Message}</p>
    })}</div>
    <input placeholder="Message..." onChange={props.handleMessageChange}/><button onClick={props.sendMessage}>Send</button>
</div>
)
}



export default ChatBox