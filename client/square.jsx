import React from 'react';

const Square = ({ number, value, clickEvent }) => (
  <div
    id="square"
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
