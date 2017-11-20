import React from 'react';

const Button = ({ children, isLoading, onClick, className }) => {
  if (isLoading) {
    return (
      <button disabled className={className}>
        Loader...
      </button>
    );
  }
  return (
    <button onClick={onClick} className={className}>{children}</button>
  );
};

export default Button;