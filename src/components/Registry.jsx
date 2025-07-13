import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiMapPin, FiHeart, FiGift, FiExternalLink } = FiIcons;

const Registry = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const registryItems = [
    {
      icon: FiHome,
      title: "Future Penthouse Fund",
      description: "Help us create our dream urban home with city views and modern amenities.",
      goal: "$5,000",
      raised: "$2,350",
      percentage: 47,
      link: "#"
    },
    {
      icon: FiMapPin,
      title: "Honeymoon Adventures",
      description: "Tokyo city lights, Paris rooftops, and Barcelona's urban charm await us.",
      goal: "$3,500",
      raised: "$1,890",
      percentage: 54,
      link: "#"
    },
    {
      icon: FiHeart,
      title: "Date Night Experiences",
      description: "A fund for future city adventures, rooftop dinners, and urban explorations.",
      goal: "$1,200",
      raised: "$780",
      percentage: 65,
      link: "#"
    }
  ];

  const traditionalRegistry = [
    { name: "West Elm", link: "#", icon: FiHome },
    { name: "CB2", link: "#", icon: FiGift },
    { name: "Williams Sonoma", link: "#", icon: FiHeart }
  ];

  return (
    <section id="registry" className={`py-20 ${
      darkMode ? 'bg-charcoal-950' : 'bg-white'
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
            REGISTRY & GIFTS
          </h2>
          <div className={`w-24 h-px mx-auto mb-6 ${
            darkMode ? 'bg-neon-400' : 'bg-charcoal-600'
          }`} />
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-champagne-300' : 'text-charcoal-700'
          }`}>
            Your presence is the greatest gift, but if you'd like to help us build our future together, here are some ways to contribute.
          </p>
        </motion.div>

        {/* Experience Funds */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`font-condensed text-3xl font-bold text-center mb-10 ${
              darkMode ? 'text-champagne-100' : 'text-charcoal-900'
            }`}
          >
            EXPERIENCE FUNDS
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {registryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative p-8 rounded-2xl ${
                  darkMode 
                    ? 'bg-charcoal-900 border border-neon-500/20 hover:border-neon-400/40' 
                    : 'bg-champagne-50 border border-charcoal-200 hover:border-charcoal-300'
                } shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Background glow */}
                <div className={`absolute inset-0 ${
                  darkMode ? 'bg-neon-500/5' : 'bg-charcoal-800/5'
                } opacity-0 hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    darkMode ? 'bg-neon-500/20 text-neon-400' : 'bg-charcoal-800 text-champagne-100'
                  }`}>
                    <SafeIcon icon={item.icon} className="w-8 h-8" />
                  </div>

                  <h4 className={`font-condensed text-2xl font-bold mb-4 ${
                    darkMode ? 'text-champagne-100' : 'text-charcoal-900'
                  }`}>
                    {item.title}
                  </h4>

                  <p className={`text-base mb-6 ${
                    darkMode ? 'text-champagne-400' : 'text-charcoal-600'
                  }`}>
                    {item.description}
                  </p>

                  {/* Progress bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                      }`}>
                        {item.raised} raised
                      </span>
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                      }`}>
                        {item.goal} goal
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      darkMode ? 'bg-charcoal-800' : 'bg-charcoal-200'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.percentage}%` } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        className={`h-2 rounded-full ${
                          darkMode ? 'bg-neon-500' : 'bg-charcoal-800'
                        }`}
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-6 rounded-full font-medium transition-all ${
                      darkMode
                        ? 'bg-neon-500 text-white hover:bg-neon-400 hover:shadow-lg hover:shadow-neon-500/25'
                        : 'bg-charcoal-800 text-champagne-100 hover:bg-charcoal-700 hover:shadow-lg'
                    }`}
                  >
                    Contribute
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Traditional Registry */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className={`font-condensed text-3xl font-bold mb-10 ${
            darkMode ? 'text-champagne-100' : 'text-charcoal-900'
          }`}>
            TRADITIONAL REGISTRY
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {traditionalRegistry.map((store, index) => (
              <motion.a
                key={index}
                href={store.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.02 }}
                className={`flex items-center justify-center p-6 rounded-xl ${
                  darkMode 
                    ? 'bg-charcoal-900 border border-neon-500/20 hover:border-neon-400/40' 
                    : 'bg-champagne-50 border border-charcoal-200 hover:border-charcoal-300'
                } shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <SafeIcon 
                  icon={store.icon} 
                  className={`w-6 h-6 mr-3 ${
                    darkMode ? 'text-neon-400' : 'text-charcoal-600'
                  }`} 
                />
                <span className={`font-condensed text-xl font-bold ${
                  darkMode ? 'text-champagne-100' : 'text-charcoal-900'
                }`}>
                  {store.name}
                </span>
                <SafeIcon 
                  icon={FiExternalLink} 
                  className={`w-4 h-4 ml-3 opacity-0 group-hover:opacity-100 transition-opacity ${
                    darkMode ? 'text-neon-400' : 'text-charcoal-600'
                  }`} 
                />
              </motion.a>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`mt-10 text-lg italic ${
              darkMode ? 'text-champagne-400' : 'text-charcoal-600'
            }`}
          >
            "The best gifts are those that help us build a lifetime of memories together."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Registry;