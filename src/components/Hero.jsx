import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown } = FiIcons;

const Hero = ({ darkMode }) => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: darkMode 
              ? 'url(https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80)'
              : 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        <div className={`absolute inset-0 ${
          darkMode ? 'bg-charcoal-950/60' : 'bg-champagne-900/40'
        }`} />
      </div>

      {/* Animated Light Bokeh */}
      <div className="absolute inset-0 z-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              darkMode ? 'bg-neon-400' : 'bg-champagne-400'
            } opacity-60`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <motion.h1
            className={`font-condensed text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-4 ${
              darkMode ? 'text-champagne-100' : 'text-white'
            }`}
            animate={{ 
              textShadow: darkMode 
                ? ['0 0 20px rgba(242, 148, 168, 0.5)', '0 0 30px rgba(242, 148, 168, 0.8)', '0 0 20px rgba(242, 148, 168, 0.5)']
                : ['0 0 20px rgba(0, 0, 0, 0.5)', '0 0 30px rgba(0, 0, 0, 0.8)', '0 0 20px rgba(0, 0, 0, 0.5)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ALEX & JORDAN
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={`w-24 h-px mx-auto mb-6 ${
              darkMode ? 'bg-neon-400' : 'bg-champagne-400'
            }`}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className={`font-serif text-xl md:text-2xl italic ${
              darkMode ? 'text-champagne-200' : 'text-white'
            }`}
          >
            Where city lights meet endless love
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="space-y-4"
        >
          <p className={`text-lg md:text-xl font-medium ${
            darkMode ? 'text-champagne-300' : 'text-white'
          }`}>
            June 15, 2024
          </p>
          <p className={`text-base md:text-lg ${
            darkMode ? 'text-champagne-400' : 'text-champagne-200'
          }`}>
            The Rooftop at Exchange Place, New York
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className={`text-sm font-medium mb-2 ${
            darkMode ? 'text-champagne-300' : 'text-white'
          }`}>
            Scroll to explore
          </span>
          <SafeIcon 
            icon={FiChevronDown} 
            className={`w-6 h-6 ${
              darkMode ? 'text-neon-400' : 'text-champagne-400'
            }`} 
          />
        </motion.div>
      </motion.div>

      {/* Marquee Text */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className={`whitespace-nowrap py-2 text-sm font-condensed tracking-widest ${
            darkMode ? 'text-neon-400/30' : 'text-champagne-600/30'
          }`}
        >
          CITY LIGHTS • URBAN LOVE • ROOFTOP VIEWS • ENDLESS NIGHTS • CITY LIGHTS • URBAN LOVE • ROOFTOP VIEWS • ENDLESS NIGHTS •
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;