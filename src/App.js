import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Index from '../src/components/index';
import About1 from '../src/components/about1';
import Contact from '../src/components/Contact';
import Service from '../src/components/Service';

function App() {
  return (
    <Router>
     
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about1" element={<About1 />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
    
    </Router>
  );
}

export default App;
