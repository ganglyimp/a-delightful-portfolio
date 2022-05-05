import { React, useState } from 'react';
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
        <a href='#Home'>Home</a>
        <br />
        <a href='#About'>About</a>
        <br />
        <a href='#Art'>Art</a>
        <br />
        <a href='#Animation'>Animation</a>
      </aside>
    </div>
  );
}

export default Sidebar;
