import React, { useState, useEffect } from "react";

const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let IndexCellEnd=[]
let winningMessageElement
let restartButton
let GameStart = false
let cellElements
let circleTurn
const Game = (props) => {

    useEffect(() => {
        if (!GameStart) {
            StartUp()
        }
    }, [props.socket])



    const StartUp = () => {
        winningMessageElement = document.getElementById('winningMessage')
        restartButton = document.getElementById('restartButton')
        circleTurn = false
        cellElements = document.querySelectorAll('[data-cell]')
        cellElements.forEach(cell => {
            cell.classList.remove(X_CLASS)
            cell.classList.remove(CIRCLE_CLASS)
            cell.removeEventListener('click', handleClick)
            cell.addEventListener('click', handleClick, { once: true })
        })
        GameStart = true
    }
    const handleClick = (event) => {
        const cell = event.target
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
        placeMark(cell, currentClass)
        swapTurns()
    }

    const placeMark = (cell, currentClass) => {
        cell.classList.add(currentClass)
    }
    const swapTurns = () => {
        circleTurn = !circleTurn
    }

    return (
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