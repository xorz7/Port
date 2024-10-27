import React from 'react';
import './Header.css';
import AnimatedName from './AnimatedName';

function Header() {
  return (
    <header className="header">
      <AnimatedName/>
      <nav>
        <a href="#blog">blog</a>
      </nav>
    </header>
  );
}

export default Header;
