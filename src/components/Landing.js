import { React } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Landing.css';

import aboutButton from '../images/buttons/about.png';
import artButton from '../images/buttons/art.png';
import animationButton from '../images/buttons/animation.png';
import MFButton from '../images/buttons/mediaFeed.png';

import About from './About';

function Landing() {
  return (
    <div className='Landing'>
      <header className='Landing-header' id='Home'>
        <h1>A Delightful Portfolio</h1>

        <div className='header-buttons'>
          <button type='button' onClick={() => {window.location.href='#About'}}>
            <img src={aboutButton} alt='About' />
          </button>

          <button type='button'>
            <Link to='/Art'>
              <img src={artButton} alt='Art' />
            </Link>
          </button>

          <button type='button'>
            <Link to='./Animation'>
              <img src={animationButton} alt='Animation' />
            </Link>
          </button>

          <button type='button'>
            <Link to='./After-Dark'>
              <img src={MFButton} alt='Media Feed' />
            </Link>
          </button>
        </div>
      </header>

      <About />
    </div>
  );
}

export default Landing;
