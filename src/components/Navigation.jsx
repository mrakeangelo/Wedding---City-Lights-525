import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX } = FiIcons;

const Navigation = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Details', href: '#details' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Registry', href: '#registry' },
    { name: 'Guestbook', href: '#guestbook' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? darkMode 
            ? 'bg-charcoal-950/90 backdrop-blur-md border-b border-neon-500/20' 
            : 'bg-champagne-50/90 backdrop-blur-md border-b border-charcoal-200/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-condensed text-xl font-bold tracking-wider"
          >
            <Link to="/" className={`${darkMode ? 'text-champagne-200' : 'text-charcoal-800'}`}>
              CITY LIGHTS
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-colors ${
                  darkMode 
                    ? 'text-champagne-300 hover:text-neon-400' 
                    : 'text-charcoal-700 hover:text-neon-600'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
            <Link to="/rsvp">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  darkMode
                    ? 'bg-neon-500 text-white hover:bg-neon-400 hover:shadow-lg hover:shadow-neon-500/25'
                    : 'bg-charcoal-800 text-champagne-100 hover:bg-charcoal-700 hover:shadow-lg'
                }`}
              >
                RSVP
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${darkMode ? 'text-champagne-200' : 'text-charcoal-800'}`}
            >
              <SafeIcon icon={isOpen ? FiX : FiMenu} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden absolute top-16 left-0 right-0 ${
              darkMode ? 'bg-charcoal-950/95' : 'bg-champagne-50/95'
            } backdrop-blur-md border-b ${
              darkMode ? 'border-neon-500/20' : 'border-charcoal-200/20'
            }`}
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    darkMode 
                      ? 'text-champagne-300 hover:text-neon-400' 
                      : 'text-charcoal-700 hover:text-neon-600'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <Link to="/rsvp" onClick={() => setIsOpen(false)}>
                <button
                  className={`w-full mt-4 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    darkMode
                      ? 'bg-neon-500 text-white hover:bg-neon-400'
                      : 'bg-charcoal-800 text-champagne-100 hover:bg-charcoal-700'
                  }`}
                >
                  RSVP
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;