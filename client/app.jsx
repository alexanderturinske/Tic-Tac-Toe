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
      grid: this.state.grid.map((e, i) => {
        if (i === number) {
          return 'X';
        } else {
          return e;
        }
      }),
    });
    // vertical check
    if (this.state.grid[0] === 'X' && this.state.grid[1] === 'X' && this.state.grid[2] === 'X' ||
      this.state.grid[4] === 'X' && this.state.grid[5] === 'X' && this.state.grid[6] === 'X' ||
      this.state.grid[7] === 'X' && this.state.grid[8] === 'X' && this.state.grid[9] === 'X'
    ) {
      alert('You have won!');
    }
    // horizontal check
    if (this.state.grid[0] === 'X' && this.state.grid[3] === 'X' && this.state.grid[7] === 'X' ||
      this.state.grid[1] === 'X' && this.state.grid[4] === 'X' && this.state.grid[8] === 'X' ||
      this.state.grid[2] === 'X' && this.state.grid[5] === 'X' && this.state.grid[9] === 'X'
    ) {
      alert('You have won!');
    }
    // cross check
    if (this.state.grid[0] === 'X' && this.state.grid[4] === 'X' && this.state.grid[9] === 'X' ||
      this.state.grid[2] === 'X' && this.state.grid[4] === 'X' && this.state.grid[7] === 'X'
    ) {
      alert('You have won!');
    }
  }

  render() {
    return (
      <div>
        <Board grid={this.state.grid} clickEvent={this.handleTurn.bind(this)} />
      </div>
    );
  }
}

export default App;
