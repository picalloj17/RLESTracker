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


      <section class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          <li id="carousel__slide1"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper">
              <a href="#carousel__slide4"
                class="carousel__prev">Go to last slide</a>
              <a href="#carousel__slide2"
                class="carousel__next">Go to next slide</a>
            </div>
          </li>
          <li id="carousel__slide2"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide1"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3"
              class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide3"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide2"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4"
              class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide4"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide3"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide1"
              class="carousel__next">Go to first slide</a>
          </li>
        </ol>
        <aside class="carousel__navigation">
          <ol class="carousel__navigation-list">
            <li class="carousel__navigation-item">
              <a href="#carousel__slide1"
                class="carousel__navigation-button">Go to slide 1</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide2"
                class="carousel__navigation-button">Go to slide 2</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide3"
                class="carousel__navigation-button">Go to slide 3</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide4"
                class="carousel__navigation-button">Go to slide 4</a>
            </li>
          </ol>
        </aside>
      </section>
    </header>
  );
};


export default Header;




