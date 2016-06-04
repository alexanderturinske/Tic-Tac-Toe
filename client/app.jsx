import React, { Component } from 'react';
import Board from './board.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: ['', '', '', '', '', '', '', '', ''],
    };
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
