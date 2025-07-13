import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Engagement shoot at Brooklyn Bridge",
      tag: "Brooklyn Bridge"
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Central Park moments",
      tag: "Central Park"
    },
    {
      src: "https://images.unsplash.com/photo-1494790108755-2616c669a4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "City coffee dates",
      tag: "Coffee Culture"
    },
    {
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Rooftop sunset",
      tag: "Rooftop Views"
    },
    {
      src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Manhattan streets",
      tag: "Street Style"
    },
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "High Line walk",
      tag: "High Line"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Urban adventures",
      tag: "Adventures"
    },
    {
      src: "https://images.unsplash.com/photo-1520637836862-4d197d17c43a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "City lights romance",
      tag: "Night Lights"
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Downtown moments",
      tag: "Downtown"
    }
  ];

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.src === selectedImage.src);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.src === selectedImage.src);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section id="gallery" className={`py-20 ${
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
            OUR GALLERY
          </h2>
          <div className={`w-24 h-px mx-auto mb-6 ${
            darkMode ? 'bg-neon-400' : 'bg-charcoal-600'
          }`} />
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-champagne-300' : 'text-charcoal-700'
          }`}>
            Capturing our love story across the city's most iconic locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className={`relative overflow-hidden rounded-2xl ${
                darkMode ? 'border-2 border-charcoal-700' : 'border-2 border-white'
              } shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Tag */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                  darkMode 
                    ? 'bg-charcoal-900/80 text-champagne-200 border border-neon-400/30' 
                    : 'bg-white/80 text-charcoal-800 border border-charcoal-200'
                } backdrop-blur-sm`}>
                  {image.tag}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`px-4 py-2 rounded-full ${
                    darkMode ? 'bg-neon-500/20 text-neon-400' : 'bg-charcoal-800/80 text-champagne-100'
                  } backdrop-blur-sm`}>
                    <span className="text-sm font-medium">View Photo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <SafeIcon icon={FiX} className="w-5 h-5" />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
              </button>

              {/* Tag */}
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white">
                <span className="text-sm font-medium">{selectedImage.tag}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;