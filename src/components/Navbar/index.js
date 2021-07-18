import React from 'react';
import Logo from '../../assets/logo.svg';
import './navbar.css';

function Navbar() {
  return (
    <header className="header" id="header">
      <nav className="nav-container">
        <div className="logo">
          <img src={ Logo } alt="Logo" />
        </div>
        <button type="button" className="button-header">Marcio Guerra Silva</button>
      </nav>
    </header>
  );
}

export default Navbar;