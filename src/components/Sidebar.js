import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Sidebar.css';

import { List, XLg } from 'react-bootstrap-icons';

function Sidebar() {
  const [sidebarExpand, setSidebarExpand] = useState(false);

  return (
    <div className='Sidebar'>
      <button type='button' className='sidebar-button' onClick={() => {setSidebarExpand(!sidebarExpand)}}>
        { sidebarExpand ? <XLg /> : <List /> }
      </button>
      <aside className={`sidebar-content ${sidebarExpand ? 'slide-in' : ''}`}>
        <Link to='/' onClick={() => {window.location.href='/#Home'}}>
          <b>Home</b>
        </Link>
        <br />
        <Link to='/#About' onClick={() => {window.location.href='/#About'}}>
          <b>About</b>
        </Link>
        <br />
        <Link to='/Art'>
          <b>Art</b>
        </Link>
        <br />
        <Link to='/Animation'>
          <b>Animation</b>
        </Link>
        <br />
        <Link to='/After-Dark'>
          <b>After Dark</b>
        </Link>
      </aside>
    </div>
  );
}

export default Sidebar;
