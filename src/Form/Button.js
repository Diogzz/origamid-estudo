import React from 'react';

const Button = ({ cor, fundo, children }) => {
  return (
    <button style={{ backgroundColor: fundo, color: cor }}>{children}</button>
  );
};

export default Button;
