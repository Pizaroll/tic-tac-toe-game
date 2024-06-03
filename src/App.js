import { useState } from 'react';

export default function Board() {
    return (
      <>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />    
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </>
    );
  }

function Square() {
  const [letter, setLetter] = useState(null);

  function handleClick() {
    setLetter('X');
  }
  
  return ( // Returning the HTML
    <button // This is a button
      className="square" // HTML Class
      onClick={handleClick} // HTML OnClick Functionality
    >
      {letter} 
    </button> // End button
  );
}
