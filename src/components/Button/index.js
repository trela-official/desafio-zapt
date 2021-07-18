import React from 'react';
import './button.css';

function Button({ title }) {
  return (
    <button className="btn-main">{title}</button>
  );
}

export default Button;