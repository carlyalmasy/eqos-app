import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageContainer from './layouts/PageContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Credentials from './pages/Credentials';
import Detail from './pages/Detail';
import Resources from './pages/Resources';
import Docs from './pages/Docs';
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
            <Route path="/detail" element={<Detail />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/spec" element={<Spec />} />
          </Routes>
        </PageContainer>
      </section>
      <Footer />
    </Router>
  );
}

export default App;
