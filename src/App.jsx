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
import Developer from './pages/Developer';
import NotFound from './pages/404';

function App({router}) {
  return (
    <Router>
      <Header />
      <section>
        <PageContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="developer/api" element={<API />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/credentials/:id" element={<Detail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/developer/spec" element={<Spec />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </PageContainer>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
