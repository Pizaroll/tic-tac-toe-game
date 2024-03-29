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
  return <button className="square">{letter}</button>;
}
