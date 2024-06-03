import { useState } from 'react';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
    return (
      <>
        <div className="board-row">
          <Square letter={squares[0]} />
          <Square letter={squares[1]} />
          <Square letter={squares[2]} />
        </div>
        <div className="board-row">
          <Square letter={squares[3]} />
          <Square letter={squares[4]} />
          <Square letter={squares[5]} />
        </div>
        <div className="board-row">
          <Square letter={squares[6]} />
          <Square letter={squares[7]} />
          <Square letter={squares[8]} />
        </div>
      </>
    );
  }

function Square({letter}) {
  return ( // Returning the HTML
    <button // This is a button
      className="square" // HTML Class
    >
      {letter} 
    </button> // End button
  );
}
