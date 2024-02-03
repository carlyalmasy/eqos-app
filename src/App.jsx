import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Spec from './pages/Spec';

function App({router}) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/spec" element={<Spec />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
