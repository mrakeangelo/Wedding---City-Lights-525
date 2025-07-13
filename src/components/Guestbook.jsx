import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPenTool, FiHeart, FiStar, FiMessageSquare } = FiIcons;

const Guestbook = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    message: '',
    location: ''
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sarah & Mike",
      message: "Can't wait to celebrate with you both under the city lights! Your love story is truly inspiring.",
      location: "Brooklyn, NY",
      timestamp: "2 days ago"
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      message: "From coffee dates to rooftop proposals - you two are meant to be! See you on the dance floor! 💃",
      location: "Manhattan, NY",
      timestamp: "1 week ago"
    },
    {
      id: 3,
      name: "The Johnson Family",
      message: "Wishing you a lifetime of urban adventures and endless love. The city brought you together! 🏙️",
      location: "Queens, NY",
      timestamp: "2 weeks ago"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      const newMessage = {
        id: messages.length + 1,
        name: formData.name,
        message: formData.message,
        location: formData.location || 'Unknown',
        timestamp: 'Just now'
      };
      setMessages([newMessage, ...messages]);
      setFormData({ name: '', message: '', location: '' });
    }
  };

  return (
    <section id="guestbook" className={`py-20 ${
      darkMode ? 'bg-charcoal-900' : 'bg-champagne-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className={`font-condensed text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-champagne-100' : 'text-charcoal-900'
          }`}>
            LEAVE A NOTE IN THE CITY LIGHTS
          </h2>
          <div className={`w-24 h-px mx-auto mb-6 ${
            darkMode ? 'bg-neon-400' : 'bg-charcoal-600'
          }`} />
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-champagne-300' : 'text-charcoal-700'
          }`}>
            Share your thoughts, memories, and well-wishes for our urban love story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Guestbook Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`p-8 rounded-2xl ${
              darkMode 
                ? 'bg-charcoal-950 border border-neon-500/20' 
                : 'bg-white border border-charcoal-200'
            } shadow-lg`}
          >
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                darkMode ? 'bg-neon-500/20 text-neon-400' : 'bg-charcoal-800 text-champagne-100'
              }`}>
                <SafeIcon icon={FiPenTool} className="w-6 h-6" />
              </div>
              <h3 className={`font-condensed text-2xl font-bold ${
                darkMode ? 'text-champagne-100' : 'text-charcoal-900'
              }`}>
                Write Your Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                }`}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all ${
                    darkMode 
                      ? 'bg-charcoal-900 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                      : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                  }`}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                }`}>
                  Location (Optional)
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all ${
                    darkMode 
                      ? 'bg-charcoal-900 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                      : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                  }`}
                  placeholder="Where are you writing from?"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                }`}>
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all resize-none ${
                    darkMode 
                      ? 'bg-charcoal-900 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                      : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                  }`}
                  placeholder="Share your thoughts, memories, or well-wishes..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-6 rounded-lg font-medium transition-all ${
                  darkMode
                    ? 'bg-neon-500 text-white hover:bg-neon-400 hover:shadow-lg hover:shadow-neon-500/25'
                    : 'bg-charcoal-800 text-champagne-100 hover:bg-charcoal-700 hover:shadow-lg'
                }`}
              >
                Add Your Message
              </motion.button>
            </form>
          </motion.div>

          {/* Messages Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                darkMode ? 'bg-neon-500/20 text-neon-400' : 'bg-charcoal-800 text-champagne-100'
              }`}>
                <SafeIcon icon={FiMessageSquare} className="w-6 h-6" />
              </div>
              <h3 className={`font-condensed text-2xl font-bold ${
                darkMode ? 'text-champagne-100' : 'text-charcoal-900'
              }`}>
                Messages from Friends
              </h3>
            </div>

            <div className="space-y-6 max-h-96 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-xl ${
                    darkMode 
                      ? 'bg-charcoal-950 border border-neon-500/20' 
                      : 'bg-white border border-charcoal-200'
                  } shadow-lg`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className={`font-medium ${
                        darkMode ? 'text-champagne-100' : 'text-charcoal-900'
                      }`}>
                        {message.name}
                      </h4>
                      <p className={`text-sm ${
                        darkMode ? 'text-champagne-400' : 'text-charcoal-600'
                      }`}>
                        {message.location} • {message.timestamp}
                      </p>
                    </div>
                    <SafeIcon 
                      icon={FiHeart} 
                      className={`w-5 h-5 ${
                        darkMode ? 'text-neon-400' : 'text-charcoal-600'
                      }`} 
                    />
                  </div>
                  <p className={`${
                    darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                  }`}>
                    {message.message}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;