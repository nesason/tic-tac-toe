import React from "react";
import Square from "./Square";
import './Board.css'

const Board = ({ squares, handleClick }) => (
  <div className="board">
    {squares.map((square, id) => (
      <Square key={id} value={square} onClick={() => handleClick(id)} />
    ))}
  </div>
);

export default Board;