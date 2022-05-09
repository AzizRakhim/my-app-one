import React from 'react';
import './App.css';

import SiteHeader from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Feature/Features';
import Learn from './components/Learn/Learn';
import Webinar from './components/Webinar/Webinar';
import Price from './components/Price/Price';
import GetApp from './components/GetApp/GetApp';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <div className="main-hero">
        <SiteHeader />
        <Hero />
      </div>
      <Features />
      <Learn />
      <Webinar />
      <Price />
      <GetApp />
      <Footer />
    </>
  );
}

export default App;
