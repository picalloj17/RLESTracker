import React from 'react';
import './styles.css';
const Header = () => {
  return (
    <header>
      <nav className='headerNav'>
        <ul>
          <li><a href="/">LEAGUES</a></li>
          <li><a href="/about">MERCH</a></li>
          <li><a href="/contact">TEAMS AND STATS</a></li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;




