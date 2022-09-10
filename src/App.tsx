import React from 'react';

import { Routes, Route } from "react-router-dom";

import Navbar from "./fragments/Navbar";

import Home from './pages/Home/Home';
import About from './pages/About/About';

import './assets/css/styles.scss';
import Footer from "./fragments/Footer";

function App() {
  return (
    <div className="App">
        <Navbar />

        <div className="container-fluid px-0">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </div>

        <Footer />
    </div>
  );
}

export default App;
