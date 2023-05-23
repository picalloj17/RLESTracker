import React from 'react';
import './styles.css';
import logo from './logo.png'
const Header = () => {
  return (
    <header>
      <div className ="mainHeader">
        <img src ={logo} alt ="logo" className="headerLogo" />
        <h1>RLES TRACKER</h1>
      </div>
      
      <nav className='headerNav'>
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/">LEAGUES</a></li>
          <li><a href="/about">ALL TEAMS</a></li>
          <li><a href="/contact">MERCH</a></li>
        </ul>
      </nav>

      <div class="carousel">
  <span id="target-slide01"></span>
  <span id="target-slide02"></span>
  <span id="target-slide03"></span>
  
  <div class="bullets">
    <a href="#target-slide01" class="bullet bullet01"></a>
    <a href="#target-slide02" class="bullet bullet02"></a>
    <a href="#target-slide03" class="bullet bullet03"></a>
  </div>
  
  <div class="slide" id="slide01">    
    <a href="#target-slide03" class="nav nav--prev">&lsaquo;</a>
    <a href="#target-slide02" class="nav nav--next">&rsaquo;</a>
  </div>
  
  <div class="slide" id="slide02">
    <a href="#target-slide01" class="nav nav--prev">&lsaquo;</a>
    <a href="#target-slide03" class="nav nav--next">&rsaquo;</a>
  </div>
  
  <div class="slide" id="slide03">
    <a href="#target-slide02" class="nav nav--prev">&lsaquo;</a>
    <a href="#target-slide01" class="nav nav--next">&rsaquo;</a>
  </div>
</div>


    </header>
  );
};


export default Header;



