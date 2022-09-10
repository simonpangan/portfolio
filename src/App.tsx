import React from 'react';

import { Routes, Route } from "react-router-dom";

import Navbar from "./fragments/Navbar";

import Home from './pages/Home/Home';
import About from './pages/About/About';

import './assets/css/styles.scss';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
