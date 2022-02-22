import React from 'react';

const Button = ({ id, children, handleClick }) => {
  return (
    <button
      style={{ marginRight: '20px' }}
      id={id}
      key={id}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
