import { React, useState } from 'react';
import './stylesheets/App.css';

import About from './components/About';
import Art from './components/Art';

import { List, XLg } from 'react-bootstrap-icons';

function App() {
  const [sidebarExpand, setSidebarExpand] = useState(false);

  return (
    <div className='App'>
      { /* SIDEBAR */ }
      <button type='button' className='sidebar-button' onClick={() => {setSidebarExpand(!sidebarExpand)}}>
        { sidebarExpand ? <XLg /> : <List /> }
      </button>
      <aside className={`sidebar ${sidebarExpand ? 'slide-in' : ''}`}>
        <a href='#Home'>Home</a>
        <br />
        <a href='#About'>About</a>
        <br />
        <a href='#Art'>Art</a>
        <br />
        <a href='#Animation'>Animation</a>
      </aside>

      { /* HEADER */ }
      <header className='App-header' id='Home'>
        <h1>A Delightful Portfolio</h1>

        <div className='header-buttons'>
          <button type='button' onClick={() => {window.location.href='#About'}}>About</button>
          <button type='button' onClick={() => {window.location.href='#Art'}}>Art</button>
          <button type='button' onClick={() => {window.location.href='#Animation'}}>Animation</button>
        </div>
      </header>

      <About />
      <Art />
    </div>
  );
}

export default App;
