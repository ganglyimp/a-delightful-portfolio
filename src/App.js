import { React, useState } from 'react';
import './stylesheets/App.css';

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
          <button type='button' onClick={() => {window.location.href='#About'}}>About</button>
          <button type='button' onClick={() => {window.location.href='#Art'}}>Art</button>
          <button type='button' onClick={() => {window.location.href='#Animation'}}>Animation</button>
          <button type='button' onClick={() => {window.location.href='#MediaFeed'}}>Media Feed</button>
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
