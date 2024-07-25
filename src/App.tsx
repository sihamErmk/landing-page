// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Documentation from './Pages/Documentation';
// Optional: A component for handling 404 errors

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
     
        </Routes>
      </div>
    </Router>
  );
};

export default App;
