import React from 'react';
import './styles.css';
const Header = () => {
  return (
    <header>
      <nav className='headerNav'>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/">LEAGUES</a></li>
          <li><a href="/about">ALL TEAMS</a></li>
          <li><a href="/contact">MERCH</a></li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;




