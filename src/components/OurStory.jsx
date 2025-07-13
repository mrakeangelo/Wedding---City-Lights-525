import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiHeart, FiStar } = FiIcons;

const OurStory = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const storyPoints = [
    {
      icon: FiMapPin,
      title: "First Coffee",
      date: "September 2019",
      location: "Blue Bottle Coffee, Brooklyn",
      description: "What started as a casual meetup turned into a 4-hour conversation about dreams, travel, and the perfect city skyline.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: FiHeart,
      title: "First Date",
      date: "October 2019",
      location: "The High Line, Manhattan",
      description: "Walking through the elevated park as the sun set behind the Hudson River, we knew this was something special.",
      image: "https://images.unsplash.com/photo-1508615263227-c5d58c1d5696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: FiStar,
      title: "The Proposal",
      date: "December 2023",
      location: "Brooklyn Bridge, Sunrise",
      description: "With the city waking up around us and the first light hitting the Manhattan skyline, Alex got down on one knee.",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section id="story" className={`py-20 ${
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
            OUR STORY IN THE CITY
          </h2>
          <div className={`w-24 h-px mx-auto mb-6 ${
            darkMode ? 'bg-neon-400' : 'bg-charcoal-600'
          }`} />
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-champagne-300' : 'text-charcoal-700'
          }`}>
            Every great love story has its landmarks. Here are the places that shaped our journey together.
          </p>
        </motion.div>

        <div className="space-y-24">
          {storyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12`}
            >
              {/* Image */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl shadow-2xl"
                >
                  <img
                    src={point.image}
                    alt={point.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className={`absolute inset-0 ${
                    darkMode ? 'bg-charcoal-900/20' : 'bg-champagne-900/20'
                  }`} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    darkMode ? 'bg-neon-500/20 text-neon-400' : 'bg-charcoal-800 text-champagne-100'
                  }`}
                >
                  <SafeIcon icon={point.icon} className="w-8 h-8" />
                </motion.div>

                <h3 className={`font-condensed text-3xl font-bold mb-4 ${
                  darkMode ? 'text-champagne-100' : 'text-charcoal-900'
                }`}>
                  {point.title}
                </h3>

                <div className="mb-4">
                  <p className={`text-sm font-medium ${
                    darkMode ? 'text-neon-400' : 'text-charcoal-600'
                  }`}>
                    {point.date}
                  </p>
                  <p className={`text-base font-medium ${
                    darkMode ? 'text-champagne-300' : 'text-charcoal-700'
                  }`}>
                    {point.location}
                  </p>
                </div>

                <p className={`text-lg leading-relaxed ${
                  darkMode ? 'text-champagne-400' : 'text-charcoal-600'
                }`}>
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Places We Love Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className={`font-condensed text-3xl font-bold mb-8 ${
            darkMode ? 'text-champagne-100' : 'text-charcoal-900'
          }`}>
            PLACES WE LOVE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Joe Coffee", type: "Our Morning Ritual", location: "East Village" },
              { name: "The Standard", type: "Date Night Spot", location: "High Line" },
              { name: "Smorgasburg", type: "Weekend Adventures", location: "Brooklyn" }
            ].map((place, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-charcoal-800 border border-neon-500/20' : 'bg-white border border-charcoal-200'
                } shadow-lg`}
              >
                <h4 className={`font-condensed text-xl font-bold mb-2 ${
                  darkMode ? 'text-champagne-100' : 'text-charcoal-900'
                }`}>
                  {place.name}
                </h4>
                <p className={`text-sm font-medium mb-1 ${
                  darkMode ? 'text-neon-400' : 'text-charcoal-600'
                }`}>
                  {place.type}
                </p>
                <p className={`text-sm ${
                  darkMode ? 'text-champagne-400' : 'text-charcoal-500'
                }`}>
                  {place.location}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;