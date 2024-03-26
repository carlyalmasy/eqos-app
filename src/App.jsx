import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageContainer from './layouts/PageContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Credentials from './pages/Credentials';
import Detail from './pages/Detail';
import Resources from './pages/Resources';
import API from './pages/API';
import Spec from './pages/Spec';

function App({router}) {
  return (
    <Router>
      <Header />
      <section>
        <PageContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/credentials/:id" element={<Detail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/api" element={<API />} />
            <Route path="/spec" element={<Spec />} />
          </Routes>
        </PageContainer>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
