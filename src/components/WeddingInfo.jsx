import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiMapPin, FiClock, FiCloud, FiCar, FiCamera } = FiIcons;

const WeddingInfo = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const infoCards = [
    {
      icon: FiCalendar,
      title: "The Date",
      details: ["Saturday, June 15, 2024", "Ceremony at 6:00 PM", "Reception to follow"]
    },
    {
      icon: FiMapPin,
      title: "The Venue",
      details: ["The Rooftop at Exchange Place", "25 Exchange Place, New York", "Stunning Manhattan skyline views"]
    },
    {
      icon: FiClock,
      title: "Timeline",
      details: ["5:30 PM - Cocktail Hour", "6:00 PM - Ceremony", "7:00 PM - Dinner & Dancing"]
    },
    {
      icon: FiCloud,
      title: "Weather Plan",
      details: ["Indoor backup available", "Heated rooftop space", "Rain or shine, we celebrate!"]
    },
    {
      icon: FiCar,
      title: "Getting There",
      details: ["Valet parking available", "Subway: 4/5/6 to Wall St", "Uber/Lyft pickup zone on site"]
    },
    {
      icon: FiCamera,
      title: "Dress Code",
      details: ["Cocktail attire", "City chic recommended", "Comfortable shoes for rooftop"]
    }
  ];

  return (
    <section id="details" className={`py-20 ${
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
            WEDDING DETAILS
          </h2>
          <div className={`w-24 h-px mx-auto mb-6 ${
            darkMode ? 'bg-neon-400' : 'bg-charcoal-600'
          }`} />
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-champagne-300' : 'text-charcoal-700'
          }`}>
            Everything you need to know to celebrate with us under the city lights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`p-8 rounded-2xl ${
                darkMode 
                  ? 'bg-charcoal-900 border border-neon-500/20 hover:border-neon-400/40' 
                  : 'bg-champagne-50 border border-charcoal-200 hover:border-charcoal-300'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                darkMode ? 'bg-neon-500/20 text-neon-400' : 'bg-charcoal-800 text-champagne-100'
              }`}>
                <SafeIcon icon={card.icon} className="w-8 h-8" />
              </div>

              <h3 className={`font-condensed text-2xl font-bold mb-4 ${
                darkMode ? 'text-champagne-100' : 'text-charcoal-900'
              }`}>
                {card.title}
              </h3>

              <div className="space-y-2">
                {card.details.map((detail, detailIndex) => (
                  <p
                    key={detailIndex}
                    className={`text-base ${
                      detailIndex === 0 
                        ? darkMode ? 'text-champagne-200 font-medium' : 'text-charcoal-800 font-medium'
                        : darkMode ? 'text-champagne-400' : 'text-charcoal-600'
                    }`}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className={`relative rounded-3xl overflow-hidden ${
            darkMode ? 'bg-charcoal-900' : 'bg-champagne-100'
          }`}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12">
                <h3 className={`font-condensed text-3xl font-bold mb-6 ${
                  darkMode ? 'text-champagne-100' : 'text-charcoal-900'
                }`}>
                  THE ROOFTOP AT EXCHANGE PLACE
                </h3>
                <p className={`text-lg mb-6 ${
                  darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                }`}>
                  Perched high above the Financial District, our venue offers breathtaking 360-degree views of Manhattan's iconic skyline. As the sun sets and the city lights begin to twinkle, we'll dance under the stars with the urban landscape as our backdrop.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <SafeIcon icon={FiMapPin} className={`w-5 h-5 mr-3 ${
                      darkMode ? 'text-neon-400' : 'text-charcoal-600'
                    }`} />
                    <span className={`${
                      darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                    }`}>
                      25 Exchange Place, New York, NY 10005
                    </span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiClock} className={`w-5 h-5 mr-3 ${
                      darkMode ? 'text-neon-400' : 'text-charcoal-600'
                    }`} />
                    <span className={`${
                      darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                    }`}>
                      Ceremony begins at golden hour
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative h-80 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="NYC Skyline"
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  darkMode ? 'bg-charcoal-900/20' : 'bg-champagne-900/20'
                }`} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingInfo;