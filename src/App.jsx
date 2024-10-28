import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Capabilities from './pages/Capabilities.jsx';
import Mission from './pages/Mission.jsx';
import Vision from './pages/Vision.jsx';
import Tools from './pages/Tools.jsx';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="capabilities" element={<Capabilities />} />
          <Route path="mission" element={<Mission />} />
          <Route path="vision" element={<Vision />} />
          <Route path="tools" element={<Tools />} />
        </Routes>
      </main>
    </>
  );
}

export default App;