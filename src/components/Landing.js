import { React } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../stylesheets/Landing.scss';

import About from './About';
import { slideVertical } from '../stylesheets/AnimationPresets';

function Landing() {
  return (
    <motion.div 
      className='Landing' 
      initial='initial'
      animate='in'
      exit='out'
      variants={slideVertical}
    >
      <header className='Landing-header' id='Home'>
        <h1>Pocket Rituals</h1>

        <div className='header-buttons'>
          <button type='button'>
            <Link to='/#About'>
              About
            </Link>
          </button>

          <button type='button'>
            <Link to='/Art'>
              Art
            </Link>
          </button>

          <button type='button'>
            <Link to='/Animation'>
              Animation
            </Link>
          </button>

          <button type='button'>
            <Link to='/After-Dark'>
              After Dark
            </Link>
          </button>
        </div>
      </header>

      <About />
    </motion.div>
  );
}

export default Landing;
