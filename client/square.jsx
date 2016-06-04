import React from 'react';

const Square = ({ number, clickEvent }) => (
  <div
    id="square"
    onClick={() => clickEvent(number)}
  >
    {number}
  </div>
);


Square.propTypes = {
  clickEvent: React.PropTypes.func,
  number: React.PropTypes.number,
};

export default Square;
