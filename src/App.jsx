// components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// pages
import Home from './pages/Home';
import KitchenSink from './pages/KitchenSink';
import Resources from './pages/resources/Index';
import NotFound from './pages/404';
// developers
import Developer from './pages/developers/Index';
import API from './pages/developers/API';
import Downloads from './pages/developers/Downloads';
import Guide from './pages/developers/Guide';
import Spec from './pages/developers/Spec';
// credentials
import Credentials from './pages/credentials/Index';
import Detail from './pages/credentials/Detail';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sink" element={<KitchenSink />} />

                <Route path="/resources" element={<Resources />} />

                <Route path="/developers" element={<Developer />} />
                <Route path="/developers/api" element={<API />} />
                <Route path="/developers/downloads" element={<Downloads />} />
                <Route path="/developers/guide" element={<Guide />} />
                <Route path="/developers/spec" element={<Spec />} />

                <Route path="/credentials" element={<Credentials />} />
                <Route path="/credentials/:id" element={<Detail />} />

                <Route path='*' element={<NotFound />}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
