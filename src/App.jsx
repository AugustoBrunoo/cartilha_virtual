import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import References from './pages/References';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/referencias" element={<References />} />
    </Routes>
  );
}

export default App;
