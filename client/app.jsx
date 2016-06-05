import React, { Component } from 'react';
import Board from './board.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: ['', '', '', '', '', '', '', '', ''],
      counter: 1,
    };
    this.handleTurn = this.handleTurn.bind(this);
  }

  handleTurn(number, value) {
    if (value !== 'X' && value !== 'O') {
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
    } else {
      alert('This position has been used!');
    }
    this.checkForWinner('X');
    this.checkForWinner('O');
  }
  checkForWinner(test) {
    // vertical check
    if (this.state.grid[0] === test && this.state.grid[1] === test && this.state.grid[2] === test ||
      this.state.grid[4] === test && this.state.grid[5] === test && this.state.grid[6] === test ||
      this.state.grid[7] === test && this.state.grid[8] === test && this.state.grid[9] === test
    ) {
      alert('Player ' + test + ' has won!');
    }
    // horizontal check
    if (this.state.grid[0] === test && this.state.grid[3] === test && this.state.grid[6] === test ||
      this.state.grid[1] === test && this.state.grid[4] === test && this.state.grid[7] === test ||
      this.state.grid[2] === test && this.state.grid[5] === test && this.state.grid[8] === test
    ) {
      alert('Player ' + test + ' has won!');
    }
    // cross check
    if (this.state.grid[0] === test && this.state.grid[4] === test && this.state.grid[8] === test ||
      this.state.grid[2] === test && this.state.grid[4] === test && this.state.grid[6] === test
    ) {
      alert('Player ' + test + ' has won!');
    }
  }
  resetGrid() {
    this.setState({
      grid: ['', '', '', '', '', '', '', '', ''],
    });
  }

  render() {
    return (
      <div className="container">
        <div className="title">Tic-Tac-Toe</div>
        <form className="button" onClick={this.resetGrid.bind(this)}>
          <input type="Button" value="Reset" />
        </form>
        <Board grid={this.state.grid} clickEvent={this.handleTurn} />
      </div>
    );
  }
}

export default App;
