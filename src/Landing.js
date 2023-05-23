import React from 'react';
import './styles.css';
//imported images
import logo from './logo.png'
import crl from './crl.png'
import rlcs from './Rlcs.png'
import ur from './urlogo.png'
import bracket from './bracket placeholder.jpg'




const Landing = () => {
  return (
    <body>
      {/*header with logo*/}
      <header>
        <div className ="mainHeader">
          <img src ={logo} alt ="logo" className="headerLogo" />
          <h1>RLES TRACKER</h1>
        </div>
        


        {/*navbar*/}
        <nav className='headerNav'>
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/">LEAGUES</a></li>
            <li><a href="/about">ALL TEAMS</a></li>
            <li><a href="/contact">MERCH</a></li>
          </ul>
        </nav>
      </header>



      {/*quick link carousel*/}
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



      {/*leagues header and clickable logos*/}
      <h1 className = "leaguesBox">LEAGUES</h1>
     <div className ="logoContainer">
        <img src = {rlcs} alt = "rlcs logo" className = "leaguesLogo"/>
        <img src ={crl} alt = "crl logo" className = "leaguesLogo"/>
        <img src ={ur} alt ="unirocketeers logo" className="leaguesLogo"/>
    </div> 


    {/*break time bois jk couldnt be bothered to space the sections out*/}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


      {/*brackets section, placeholder for now*/}
      <h1 className="bracketsTitle">BRACKETS</h1>
      <div className="bracketContainer">
        <img src ={bracket} alt = "brackets" className = "bracketImg"/>
      </div>
    </body>
    
  );
};


export default Landing;



