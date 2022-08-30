import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import './stylesheets/App.css';

import Sidebar from './components/Sidebar';
import Art from './components/Art';
import Animation from './components/Animation';
import Landing from './components/Landing';
import AfterDark from './components/AfterDark';

function App() {
  return (
    <div className='App'>
      <Sidebar />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Art' element={<Art />} />
        <Route path='/Animation' element={<Animation />} />
        <Route path='/After-Dark' element={<AfterDark />} />
      </Routes>
    </div>
  );
}

export default App;
