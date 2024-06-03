export default function Board() {
    return (
      <>
        <div className="board-row">
          <Square letter="a"/>
          <Square letter="b"/>
          <Square letter="c"/>
        </div>
        <div className="board-row">
          <Square letter="d"/>
          <Square letter="e"/>
          <Square letter="f"/>    
        </div>
        <div className="board-row">
          <Square letter="g"/>
          <Square letter="h"/>
          <Square letter="i"/>
        </div>
      </>
    );
  }

function Square({letter}) {
  function handleClick() {
    console.log('clicked ' + letter + '!');
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
