import { React } from 'react';
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

  return (
    <div className='App'>
      <Navbar />

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
