import React, { useState } from "react";
import { calculateWinner } from "../checker";
import Board from "./Board";
import './Game.css'

const Game = () => {
    
    const [results, setResults] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(results);
    const player = xIsNext ? "X" : "O";

    const handleClick = (idSquare) => {
        
        const squares = results;
        if (winner || squares[idSquare]) return;
        squares[idSquare] = player;
        setResults(squares);
        setXisNext(!xIsNext);
    };



    return (
        <>
            <h3>{winner ? " The Winner  is " + winner : "Current Player: " + player}</h3>

            <Board squares={results} handleClick={handleClick} />
            
            <h1> Tic Tac Toe </h1>


        </>
    );
};

export default Game;