import { React, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './stylesheets/App.scss';

import Navbar from './components/Navbar';
import Art from './components/Art';
import Animation from './components/Animation';
import Landing from './components/Landing';
import AfterDark from './components/AfterDark';

function App() {
  const location = useLocation();

  useEffect(() => {
    if(location.hash === '') {
      window.scrollTo(0, 0);
    }
    else {
      setTimeout(() => {
        let sectionID = location.hash.replace('#', '');
        const section = document.getElementById(sectionID);
        
        if(section) {
          section.scrollIntoView();
        }
      }, 0);
    }
  }, [location])

  return (
    <div className='App'>
      <Navbar currPath={location} />

      <AnimatePresence exitBeforeEnter={true}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Landing />} />
          <Route path='/Art' element={<Art />} />
          <Route path='/Animation' element={<Animation />} />
          <Route path='/After-Dark' element={<AfterDark />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
