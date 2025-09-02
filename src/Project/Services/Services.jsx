import React, { useEffect, useRef, useState } from 'react';
import 'flickity/css/flickity.css';
import Flickity from 'flickity';
import { motion, AnimatePresence } from 'framer-motion';
import heroc1 from '../../assets/heroc2.jpg';
import heroc2 from '../../assets/heroc3.jpg';
import heroc3 from '../../assets/heroc1.jpg';
import OurServices from './OurServices';
import Need from './Need';

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveringArrows, setIsHoveringArrows] = useState(false);
  const carouselRef = useRef(null);
  const flktyRef = useRef(null);

  const slides = [
    {
      image: heroc1,
      title: 'Premium Garment Care',
      subtitle: 'Expert cleaning for your most delicate fabrics',
      cta: 'Book a Collection',
      textPosition: 'center',
    },
    {
      image: heroc2,
      title: 'Luxury Laundry Services',
      subtitle: 'Sustainable methods without compromising quality',
      cta: 'Book a Collection',
      textPosition: 'center',
    },
    {
      image: heroc3,
      title: 'Precision Fabric Care',
      subtitle: 'Impeccable finishes for business and formalwear',
      cta: 'Book a Collection',
      textPosition: 'center',
    },
  ];

  useEffect(() => {
    if (carouselRef.current) {
      flktyRef.current = new Flickity(carouselRef.current, {
        wrapAround: true,
        autoPlay: 5000,
        imagesLoaded: true,
        percentPosition: false,
        prevNextButtons: false,
        pageDots: false,
        pauseAutoPlayOnHover: true,
      });

      flktyRef.current.on('change', (index) => {
        setCurrentIndex(index);
      });

      return () => {
        if (flktyRef.current) {
          flktyRef.current.destroy();
        }
      };
    }
  }, []);

  const handleDotClick = (index) => {
    if (flktyRef.current) {
      flktyRef.current.select(index);
      flktyRef.current.playPlayer();
    }
  };

  const prevSlide = () => {
    if (flktyRef.current) {
      flktyRef.current.previous();
      flktyRef.current.playPlayer();
    }
  };

  const nextSlide = () => {
    if (flktyRef.current) {
      flktyRef.current.next();
      flktyRef.current.playPlayer();
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      backgroundColor: "rgba(28, 28, 28, 0.8)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const buttonHover = {
    scale: 1.05,
    backgroundColor: "#c9a227",
    transition: { duration: 0.2 }
  };

  const buttonTap = {
    scale: 0.98
  };

  return (
    <>
      <div className="w-full h-screen overflow-hidden relative">
        <div ref={carouselRef} className="w-full h-full">
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full relative">
              <motion.img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                
                transition={{ duration: 5, ease: "linear" }}
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Text Overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-center text-white px-4  ${
                  slide.textPosition === 'left'
                    ? 'items-start pl-12 md:pl-24'
                    : slide.textPosition === 'right'
                    ? 'items-end pr-12 md:pr-24'
                    : 'items-center'
                }`}
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col items-center"
                >
                  <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 max-w-2xl text-center"
                  >
                    {slide.title}
                  </motion.h2>

                  {/* Enhanced Subtitle with animated before/after lines */}
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-6 mb-10 px-4"
                  >
                    <motion.div
                      className="h-[2px] bg-[#D4AF37]"
                      initial={{ width: 0 }}
                      animate={{ width: 70 }}
                      transition={{ duration: 0.5 }}
                    />
                    <p className="text-2xl md:text-3xl font-light text-[#F5DEB3] tracking-wide text-center whitespace-nowrap drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <motion.div
                      className="h-[2px] bg-[#D4AF37]"
                      initial={{ width: 0 }}
                      animate={{ width: 70 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </motion.div>

                  <a href="/card">
                    <motion.button
                    variants={itemVariants}
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                    className="bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-8 py-3 rounded-full text-lg font-medium"
                  >
                    {slide.cta}
                  </motion.button>
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-3 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? 'w-6 h-3 rounded-full bg-yellow-400'
                  : 'w-3 h-3 rounded-full bg-white bg-opacity-70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Arrows */}
        <AnimatePresence>
          <motion.button
            onClick={prevSlide}
            className="absolute top-1/2 left-5 transform -translate-y-1/2 z-20 
              bg-[#1c1c1c80] rounded-full p-3 md:p-4 flex items-center justify-center"
            aria-label="Previous slide"
            variants={arrowVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            onMouseEnter={() => setIsHoveringArrows(true)}
            onMouseLeave={() => setIsHoveringArrows(false)}
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 z-20 
              bg-[#1c1c1c80] rounded-full p-3 md:p-4 flex items-center justify-center"
            aria-label="Next slide"
            variants={arrowVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            onMouseEnter={() => setIsHoveringArrows(true)}
            onMouseLeave={() => setIsHoveringArrows(false)}
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </AnimatePresence>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.span 
            className="text-4xl text-white block"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
      <OurServices/>
      <Need/>
    </>
  );
}

export default Services;