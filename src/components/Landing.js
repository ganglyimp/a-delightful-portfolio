import { React } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../stylesheets/Landing.scss';

import aboutButton from '../images/buttons/about.png';
import artButton from '../images/buttons/art.png';
import animationButton from '../images/buttons/animation.png';
import MFButton from '../images/buttons/mediaFeed.png';

import About from './About';
import { slideVertical } from '../stylesheets/AnimationPresets';

function Landing() {
  return (
    <motion.div 
      className='Landing' 
      initial="initial"
      animate="in"
      exit="out"
      variants={slideVertical}
    >
      <header className='Landing-header' id='Home'>
        <h1>A Delightful Portfolio</h1>

        <div className='header-buttons'>
          <button type='button' onClick={() => {window.location.href='/a-delightful-portfolio#/#About'}}>
            <img src={aboutButton} alt='About' />
          </button>

          <button type='button'>
            <Link to='/Art'>
              <img src={artButton} alt='Art' />
            </Link>
          </button>

          <button type='button'>
            <Link to='/Animation'>
              <img src={animationButton} alt='Animation' />
            </Link>
          </button>

          <button type='button'>
            <Link to='/After-Dark'>
              <img src={MFButton} alt='Media Feed' />
            </Link>
          </button>
        </div>
      </header>

      <About />
    </motion.div>
  );
}

export default Landing;
