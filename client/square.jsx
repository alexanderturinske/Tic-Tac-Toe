import React, { Component } from 'react';

class Square extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id="square"
        onClick={() => this.props.clickEvent(this.props.number)}
      >
        {this.props.number}
      </div>
    );
  }
}

Square.propTypes = {
  clickEvent: React.PropTypes.func,
  number: React.PropTypes.number,
};

export default Square;
