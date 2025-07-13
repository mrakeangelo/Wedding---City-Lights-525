import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Registry from './components/Registry';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${
        darkMode ? 'bg-charcoal-950 text-champagne-100' : 'bg-champagne-50 text-charcoal-900'
      }`}>
        <Navigation darkMode={darkMode} />
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero darkMode={darkMode} />
              <OurStory darkMode={darkMode} />
              <WeddingInfo darkMode={darkMode} />
              <Gallery darkMode={darkMode} />
              <Registry darkMode={darkMode} />
              <Guestbook darkMode={darkMode} />
            </main>
          } />
          <Route path="/rsvp" element={<RSVP darkMode={darkMode} />} />
        </Routes>
        
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;