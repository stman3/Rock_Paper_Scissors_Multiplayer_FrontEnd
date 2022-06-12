import React from "react";


const Game =()=>{
   
    return(
        <body className="game">
            <div className="board x">
               <div className="cell x"></div>
               <div className="cell circle"></div>
               <div className="cell"></div>
               <div className="cell"></div>
               <div className="cell"></div>
               <div className="cell"></div>
               <div className="cell"></div>
               <div className="cell"></div>
               <div className="cell"></div>
            </div>
            <div className="winning-message">
                <div></div>
                <button className="restartButton">Restart</button>
            </div>
        </body>
    )
}


export default Game