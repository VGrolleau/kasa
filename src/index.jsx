import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/styles/index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/index.jsx'
import About from './pages/About/index.jsx'
import Housing from './pages/Housing/index.jsx'
import Error from './pages/Error';
import Header from './components/Header'
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/kasa" element={<Home />} />
        <Route path="/kasa/about" element={<About />} />
        <Route path="/kasa/housing/:housingId" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);
