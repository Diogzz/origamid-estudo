import React from 'react';

const Input = ({ id, label, inputName, children, ...props }) => {
  return (
    <>
      <p>
        <label htmlFor={label}>{children}</label>
        <input
          id={id}
          type={{ ...(props.type ? props.type : 'text') }}
          name={inputName}
          {...props}
        />
      </p>
    </>
  );
};

export default Input;
