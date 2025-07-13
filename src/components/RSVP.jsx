import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiCheck, FiX, FiUsers, FiMail, FiPhone } = FiIcons;

const RSVP = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '1',
    guestNames: '',
    dietaryRestrictions: '',
    songRequest: '',
    afterParty: '',
    outfitColors: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP Data:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        darkMode ? 'bg-charcoal-950' : 'bg-champagne-50'
      }`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md mx-auto px-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className={`w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center ${
              darkMode ? 'bg-neon-500/20 text-neon-400' : 'bg-charcoal-800 text-champagne-100'
            }`}
          >
            <SafeIcon icon={FiCheck} className="w-12 h-12" />
          </motion.div>
          
          <h2 className={`font-condensed text-3xl font-bold mb-4 ${
            darkMode ? 'text-champagne-100' : 'text-charcoal-900'
          }`}>
            RSVP CONFIRMED!
          </h2>
          
          <p className={`text-lg mb-8 ${
            darkMode ? 'text-champagne-300' : 'text-charcoal-700'
          }`}>
            Thank you for your response! We can't wait to celebrate with you under the city lights.
          </p>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-medium transition-all ${
                darkMode
                  ? 'bg-neon-500 text-white hover:bg-neon-400 hover:shadow-lg hover:shadow-neon-500/25'
                  : 'bg-charcoal-800 text-champagne-100 hover:bg-charcoal-700 hover:shadow-lg'
              }`}
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-20 ${
      darkMode ? 'bg-charcoal-950' : 'bg-champagne-50'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center mb-6 text-sm font-medium hover:underline">
            <SafeIcon icon={FiArrowLeft} className="w-4 h-4 mr-2" />
            Back to Wedding Site
          </Link>
          
          <h1 className={`font-condensed text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-champagne-100' : 'text-charcoal-900'
          }`}>
            RSVP
          </h1>
          <p className={`text-lg ${
            darkMode ? 'text-champagne-300' : 'text-charcoal-700'
          }`}>
            Join us for an unforgettable celebration under the city lights
          </p>
        </motion.div>

        {/* RSVP Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`p-8 rounded-2xl ${
            darkMode 
              ? 'bg-charcoal-900 border border-neon-500/20' 
              : 'bg-white border border-charcoal-200'
          } shadow-lg`}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                }`}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all ${
                    darkMode 
                      ? 'bg-charcoal-800 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                      : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                }`}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all ${
                    darkMode 
                      ? 'bg-charcoal-800 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                      : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                  }`}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Attendance */}
            <div>
              <label className={`block text-sm font-medium mb-4 ${
                darkMode ? 'text-champagne-300' : 'text-charcoal-700'
              }`}>
                Will you be attending? *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'yes', label: 'Yes, I\'ll be there!', icon: FiCheck },
                  { value: 'no', label: 'Sorry, can\'t make it', icon: FiX }
                ].map((option) => (
                  <motion.label
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                      formData.attendance === option.value
                        ? darkMode
                          ? 'border-neon-500 bg-neon-500/10'
                          : 'border-charcoal-800 bg-charcoal-50'
                        : darkMode
                          ? 'border-charcoal-700 hover:border-neon-500/50'
                          : 'border-charcoal-300 hover:border-charcoal-500'
                    }`}
                  >
                    <input
                      type="radio"
                      name="attendance"
                      value={option.value}
                      checked={formData.attendance === option.value}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <SafeIcon 
                      icon={option.icon} 
                      className={`w-5 h-5 mr-3 ${
                        formData.attendance === option.value
                          ? darkMode ? 'text-neon-400' : 'text-charcoal-800'
                          : darkMode ? 'text-champagne-400' : 'text-charcoal-600'
                      }`} 
                    />
                    <span className={`${
                      formData.attendance === option.value
                        ? darkMode ? 'text-champagne-100' : 'text-charcoal-900'
                        : darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                    }`}>
                      {option.label}
                    </span>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Conditional fields for attending guests */}
            {formData.attendance === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Number of Guests */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                    }`}>
                      Number of Guests (including yourself)
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all ${
                        darkMode 
                          ? 'bg-charcoal-800 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                          : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                      }`}
                    >
                      {[1, 2, 3, 4].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                    }`}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all ${
                        darkMode 
                          ? 'bg-charcoal-800 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                          : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                      }`}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Guest Names */}
                {parseInt(formData.guests) > 1 && (
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                    }`}>
                      Guest Names
                    </label>
                    <input
                      type="text"
                      name="guestNames"
                      value={formData.guestNames}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all ${
                        darkMode 
                          ? 'bg-charcoal-800 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                          : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                      }`}
                      placeholder="Names of additional guests"
                    />
                  </div>
                )}

                {/* Dietary Restrictions */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                  }`}>
                    Dietary Restrictions or Allergies
                  </label>
                  <textarea
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all resize-none ${
                      darkMode 
                        ? 'bg-charcoal-800 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                        : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                    }`}
                    placeholder="Let us know about any dietary needs..."
                  />
                </div>

                {/* After Party */}
                <div>
                  <label className={`block text-sm font-medium mb-4 ${
                    darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                  }`}>
                    After Party at The Standard High Line?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { value: 'yes', label: 'Count me in!' },
                      { value: 'no', label: 'Just the ceremony & reception' }
                    ].map((option) => (
                      <motion.label
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.afterParty === option.value
                            ? darkMode
                              ? 'border-neon-500 bg-neon-500/10'
                              : 'border-charcoal-800 bg-charcoal-50'
                            : darkMode
                              ? 'border-charcoal-700 hover:border-neon-500/50'
                              : 'border-charcoal-300 hover:border-charcoal-500'
                        }`}
                      >
                        <input
                          type="radio"
                          name="afterParty"
                          value={option.value}
                          checked={formData.afterParty === option.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className={`${
                          formData.afterParty === option.value
                            ? darkMode ? 'text-champagne-100' : 'text-charcoal-900'
                            : darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                        }`}>
                          {option.label}
                        </span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Outfit Colors */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                  }`}>
                    Preferred Outfit Colors (Optional)
                  </label>
                  <input
                    type="text"
                    name="outfitColors"
                    value={formData.outfitColors}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all ${
                      darkMode 
                        ? 'bg-charcoal-800 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                        : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                    }`}
                    placeholder="e.g., Navy, Champagne, Blush"
                  />
                </div>

                {/* Song Request */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                  }`}>
                    Song Request for the Reception
                  </label>
                  <input
                    type="text"
                    name="songRequest"
                    value={formData.songRequest}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all ${
                      darkMode 
                        ? 'bg-charcoal-800 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                        : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                    }`}
                    placeholder="What song will get you on the dance floor?"
                  />
                </div>
              </motion.div>
            )}

            {/* Message */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-champagne-300' : 'text-charcoal-700'
              }`}>
                Message for the Couple (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-offset-2 transition-all resize-none ${
                  darkMode 
                    ? 'bg-charcoal-800 border-charcoal-700 text-champagne-100 focus:ring-neon-500 focus:border-neon-500' 
                    : 'bg-champagne-50 border-charcoal-300 text-charcoal-900 focus:ring-charcoal-500 focus:border-charcoal-500'
                }`}
                placeholder="Share your thoughts, memories, or well-wishes..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all ${
                darkMode
                  ? 'bg-neon-500 text-white hover:bg-neon-400 hover:shadow-lg hover:shadow-neon-500/25'
                  : 'bg-charcoal-800 text-champagne-100 hover:bg-charcoal-700 hover:shadow-lg'
              }`}
            >
              Submit RSVP
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RSVP;