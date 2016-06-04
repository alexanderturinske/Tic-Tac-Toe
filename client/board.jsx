import React, { Component } from 'react';
import Square from './square.jsx';

class Board extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id='board'>
        {this.props.grid.map((square, i) =>
          <Square key={i} number={i} />
        )}
      </div>
    );
  }
}

Board.propTypes = {
  grid: React.PropTypes.array,
};

export default Board;
