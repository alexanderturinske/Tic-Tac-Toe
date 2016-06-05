import React from 'react';
import Square from './square.jsx';

const Board = ({ grid, clickEvent }) => (
  <div id='board'>
    {grid.map((square, i) =>
      <Square
        key={i}
        number={i}
        value={grid[i]}
        clickEvent={clickEvent}
      />
    )}
  </div>
);

Board.propTypes = {
  grid: React.PropTypes.array,
  clickEvent: React.PropTypes.func,
};

export default Board;
