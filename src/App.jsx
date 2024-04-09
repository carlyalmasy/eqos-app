import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './layouts/Container';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Credentials from './pages/credentials/Index';
import Detail from './pages/credentials/Detail';
import Resources from './pages/resources/Index';
import API from './pages/developers/API';
import Spec from './pages/developers/Spec';
import Developer from './pages/developers/Index';
import NotFound from './pages/404';
import KitchenSink from './pages/KitchenSink';
import Downloads from './pages/developers/Downloads';

function App({router}) {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sink" element={<KitchenSink />} />

                <Route path="/resources" element={<Resources />} />

                <Route path="/developers" element={<Developer />} />
                <Route path="/developers/api" element={<API />} />
                <Route path="/developers/spec" element={<Spec />} />
                <Route path="/developers/downloads" element={<Downloads />} />

                <Route path="/credentials" element={<Credentials />} />
                <Route path="/credentials/:id" element={<Detail />} />

                <Route path='*' element={<NotFound />}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
