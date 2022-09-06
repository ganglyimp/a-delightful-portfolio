import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.scss';

import { ChevronDown } from 'react-bootstrap-icons';

function Navbar() {
  const [navbarExpand, setNavbarExpand] = useState(false);

  return (
    <div className='Navbar'>
      <button 
        className={`navbar-button ${navbarExpand ? 'active' : ''}`}
        type='button'
        onClick={() => {setNavbarExpand(!navbarExpand)}}
      >
        <ChevronDown />
      </button>

      <aside className={`navbar-content ${navbarExpand ? 'slide-in' : ''}`}>
        <Link to='/' onClick={() => {setNavbarExpand(false)}}>
          <b>Home</b>
        </Link>
        <Link to='/#About' onClick={() => {setNavbarExpand(false)}}>
          <b>About</b>
        </Link>
        <Link to='/Art' onClick={() => {setNavbarExpand(false)}}>
          <b>Art</b>
        </Link>
        <Link to='/Animation' onClick={() => {setNavbarExpand(false)}}>
          <b>Animation</b>
        </Link>
        <Link to='/After-Dark' onClick={() => {setNavbarExpand(false)}}>
          <b>After Dark</b>
        </Link>
      </aside>
    </div>
  );
}

export default Navbar;
