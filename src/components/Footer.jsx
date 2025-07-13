import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiInstagram, FiMail, FiPhone } = FiIcons;

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-charcoal-950 border-t border-neon-500/20' : 'bg-champagne-200 border-t border-charcoal-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className={`font-condensed text-xl font-bold mb-4 ${
              darkMode ? 'text-champagne-100' : 'text-charcoal-900'
            }`}>
              GET IN TOUCH
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <SafeIcon icon={FiMail} className={`w-4 h-4 mr-3 ${
                  darkMode ? 'text-neon-400' : 'text-charcoal-600'
                }`} />
                <span className={`text-sm ${
                  darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                }`}>
                  alexandjordan@wedding.com
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <SafeIcon icon={FiPhone} className={`w-4 h-4 mr-3 ${
                  darkMode ? 'text-neon-400' : 'text-charcoal-600'
                }`} />
                <span className={`text-sm ${
                  darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                }`}>
                  (555) 123-LOVE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Wedding Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className={`font-condensed text-xl font-bold mb-4 ${
              darkMode ? 'text-champagne-100' : 'text-charcoal-900'
            }`}>
              WEDDING DETAILS
            </h3>
            <div className="space-y-2">
              <p className={`text-sm ${
                darkMode ? 'text-champagne-300' : 'text-charcoal-700'
              }`}>
                June 15, 2024
              </p>
              <p className={`text-sm ${
                darkMode ? 'text-champagne-300' : 'text-charcoal-700'
              }`}>
                The Rooftop at Exchange Place
              </p>
              <p className={`text-sm ${
                darkMode ? 'text-champagne-300' : 'text-charcoal-700'
              }`}>
                New York, NY
              </p>
            </div>
          </motion.div>

          {/* Social & Follow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h3 className={`font-condensed text-xl font-bold mb-4 ${
              darkMode ? 'text-champagne-100' : 'text-charcoal-900'
            }`}>
              FOLLOW OUR JOURNEY
            </h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  darkMode 
                    ? 'bg-neon-500/20 text-neon-400 hover:bg-neon-500/30' 
                    : 'bg-charcoal-800 text-champagne-100 hover:bg-charcoal-700'
                }`}
              >
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </motion.a>
            </div>
            <p className={`text-sm mt-3 ${
              darkMode ? 'text-champagne-400' : 'text-charcoal-600'
            }`}>
              #AlexAndJordanCityLights
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className={`pt-8 border-t ${
          darkMode ? 'border-neon-500/20' : 'border-charcoal-300'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={`text-sm mb-4 md:mb-0 ${
                darkMode ? 'text-champagne-400' : 'text-charcoal-600'
              }`}
            >
              City Lights – A Modern Urban Wedding Template by Mrake Agency
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center"
            >
              <span className={`text-sm mr-2 ${
                darkMode ? 'text-champagne-400' : 'text-charcoal-600'
              }`}>
                Made with
              </span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  color: darkMode ? ['#f294a8', '#e8677f', '#f294a8'] : ['#d64465', '#b5344f', '#d64465']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <SafeIcon icon={FiHeart} className="w-4 h-4" />
              </motion.div>
              <span className={`text-sm ml-2 ${
                darkMode ? 'text-champagne-400' : 'text-charcoal-600'
              }`}>
                in NYC
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;