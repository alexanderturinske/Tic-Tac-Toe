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
          <Square
            key={i}
            number={i}
            clickEvent={this.props.clickEvent}
          />
        )}
      </div>
    );
  }
}

Board.propTypes = {
  grid: React.PropTypes.array,
  clickEvent: React.PropTypes.func,
};

export default Board;
