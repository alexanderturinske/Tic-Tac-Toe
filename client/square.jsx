import React from 'react';

const Square = ({ number, value, clickEvent }) => (
  <div
    className="square"
    id={'square' + number}
    onClick={() => clickEvent(number, value)}
  >
    {value}
  </div>
);


Square.propTypes = {
  clickEvent: React.PropTypes.func,
  number: React.PropTypes.number,
  value: React.PropTypes.string,
};

export default Square;
