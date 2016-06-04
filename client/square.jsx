import React, { Component } from 'react';

class Square extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="square">
        {this.props.number}
      </div>
    );
  }
}

export default Square;
