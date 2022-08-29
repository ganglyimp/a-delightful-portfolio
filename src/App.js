import { React } from 'react';
import './stylesheets/App.css';

import aboutButton from './images/buttons/about.png';
import artButton from './images/buttons/art.png';
import animationButton from './images/buttons/animation.png';
import MFButton from './images/buttons/mediaFeed.png';

import Sidebar from './components/Sidebar';
import About from './components/About';
import Art from './components/Art';
import Animation from './components/Animation';

function App() {
  return (
    <div className='App'>
      <Sidebar />

      { /* HEADER */ }
      <header className='App-header' id='Home'>
        <h1>A Delightful Portfolio</h1>

        <div className='header-buttons'>
          <button type='button' onClick={() => {window.location.href='#About'}}>
            <img src={aboutButton} alt='About' />
          </button>
          <button type='button' onClick={() => {window.location.href='#Art'}}>
            <img src={artButton} alt='Art' />
          </button>
          <button type='button' onClick={() => {window.location.href='#Animation'}}>
          <img src={animationButton} alt='Animation' />
          </button>
          <button type='button' onClick={() => {window.location.href='#MediaFeed'}}>
            <img src={MFButton} alt='Media Feed' />
          </button>
        </div>
      </header>

      { /* OTHER SECTIONS */ }
      <About />
      <Art />
      <Animation />
    </div>
  );
}

export default App;
