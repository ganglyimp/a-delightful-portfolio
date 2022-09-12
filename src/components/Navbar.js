import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.scss';

import { ChevronDown } from 'react-bootstrap-icons';

function Navbar(props) {
  const [navbarExpand, setNavbarExpand] = useState(false);

  return (
    <div className='Navbar'>
      {/* TOGGLE BUTTON */}
      <button 
        className={`navbar-button ${navbarExpand ? 'active' : ''}`}
        type='button'
        onClick={() => {setNavbarExpand(!navbarExpand)}}
      >
        <ChevronDown />
      </button>

      {/* NAVBAR CONTENT */}
      <aside className={`navbar-content ${navbarExpand ? 'slide-in' : ''}`}>
        <Link to='/' onClick={() => {setNavbarExpand(false)}}>
          <b className={('/' === props.currPath.pathname) ? 'active' : ''}>
            Home
          </b>
        </Link>

        <Link to='/#About' onClick={() => {setNavbarExpand(false)}}>
          <b className={('#About' === props.currPath.hash) ? 'active' : ''}>
            About
          </b>
        </Link>

        <Link to='/Art' onClick={() => {setNavbarExpand(false)}}>
          <b className={('/Art' === props.currPath.pathname) ? 'active' : ''}>
            Art
          </b>
        </Link>

        <Link to='/Animation' onClick={() => {setNavbarExpand(false)}}>
          <b className={('/Animation' === props.currPath.pathname) ? 'active' : ''}>
            Animation
          </b>
        </Link>

        <Link to='/After-Dark' onClick={() => {setNavbarExpand(false)}}>
          <b className={('/After-Dark' === props.currPath.pathname) ? 'active' : ''}>
            After Dark
          </b>
        </Link>
      </aside>

      {/* AREA OUTSIDE BAR */}
      <aside 
        className={`navbar-space ${navbarExpand ? 'slide-in' : ''}`} 
        onClick={() => {setNavbarExpand(false)}} 
      />
    </div>
  );
}

export default Navbar;
