import React from 'react';

const Button = ({ id, children, handleClick }) => {
  return (
    <button style={{ margin: '.5rem' }} id={id} key={id} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
