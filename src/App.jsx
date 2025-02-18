import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume'; // Ensure the path is correct

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path='/' element={<><Navbar /><Home /><About /><Projects /></>} />
          <Route path='/resume' element={<Resume />} /> {/* Ensure the path matches */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;