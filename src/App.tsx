import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import BugSweeper from './pages/BugSweeper';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/bug-sweeper-poc" element={<BugSweeper />} />
      {/* <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default App;