import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed top-20 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
        darkMode 
          ? 'bg-neon-500/20 text-neon-400 hover:bg-neon-500/30 border border-neon-500/30' 
          : 'bg-charcoal-800 text-champagne-100 hover:bg-charcoal-700 shadow-lg'
      }`}
      title={darkMode ? 'Switch to Golden Hour' : 'Switch to After Hours'}
    >
      <motion.div
        key={darkMode ? 'dark' : 'light'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <SafeIcon icon={darkMode ? FiSun : FiMoon} className="w-6 h-6" />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;