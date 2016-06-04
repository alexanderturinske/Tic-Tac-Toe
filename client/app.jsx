import React, { Component } from 'react';
import Board from './board.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: ['', '', '', '', '', '', '', '', ''],
    };
  }

  handleTurn(number) {
    this.setState({
      grid: grid.map((e, i) => {
        if (i === number) {
          return 'X';
        } else {
          return e;
        }
      }),
    });
    if (this.state.grid[0] === 'X' && this.state.grid[1] === 'X' && this.state.grid[2] === 'X') {
      alert('You have won!');
    }
  }

  render() {
    return (
      <div>
        <Board grid={this.state.grid} />
      </div>
    );
  }
}

export default App;
