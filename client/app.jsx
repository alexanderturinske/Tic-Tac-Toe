import React, { Component } from 'react';
import Board from './board.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
      counter: 1,
    };
    this.handleTurn = this.handleTurn.bind(this);
  }

  handleTurn(number) {
    this.setState({
      grid: this.state.grid.map((e, i) => {
        if (i === number) {
          if (this.state.counter % 2) {
            return 'X';
          } else {
            return 'O';
          }
        } else {
          return e;
        }
      }),
      counter: ++this.state.counter,
    });
    this.checkForWinner('X');
    this.checkForWinner('O');
  }
  checkForWinner(test) {
    // vertical check
    if (this.state.grid[0] === test && this.state.grid[1] === test && this.state.grid[2] === test ||
      this.state.grid[4] === test && this.state.grid[5] === test && this.state.grid[6] === test ||
      this.state.grid[7] === test && this.state.grid[8] === test && this.state.grid[9] === test
    ) {
      alert('You have won!');
    }
    // horizontal check
    if (this.state.grid[0] === test && this.state.grid[3] === test && this.state.grid[6] === test ||
      this.state.grid[1] === test && this.state.grid[4] === test && this.state.grid[7] === test ||
      this.state.grid[2] === test && this.state.grid[5] === test && this.state.grid[8] === test
    ) {
      alert('You have won!');
    }
    // cross check
    if (this.state.grid[0] === test && this.state.grid[4] === test && this.state.grid[9] === test ||
      this.state.grid[2] === test && this.state.grid[4] === test && this.state.grid[7] === test
    ) {
      alert('You have won!');
    }
  }
  resetGrid() {
    this.setState({
      grid: ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
    });
    console.log('yiss');
  }

  render() {
    return (
      <div>
        <form onClick={this.resetGrid.bind(this)}>
          <input type="Button" value="Reset" />
        </form>
        <Board grid={this.state.grid} clickEvent={this.handleTurn} />
      </div>
    );
  }
}

export default App;
