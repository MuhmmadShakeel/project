import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import sign02 from '../../assets/sign02.jpg';
import heroc1 from '../../assets/heroc1.jpg';
import heroc2 from '../../assets/heroc2.jpg';
import ContacUs from './ContactUs';

const slides = [
  {
    id: 1,
    title: 'Luxury Detailing',
    subtitle: 'Your car deserves the best',
    image: sign02,
    bgColor: 'bg-[#1a1a2e]', 
    overlayColor: 'bg-black/60'
  },
  {
    id: 2,
    title: 'Premium Wash',
    subtitle: 'Spotless finish every time',
    image: heroc1,
    bgColor: 'bg-[#1e1e1e]', 
    overlayColor: 'bg-black/60'
  },
  {
    id: 3,
    title: 'Express Service',
    subtitle: 'Quick turnaround without compromising quality',
    image: heroc2,
    bgColor: 'bg-[#1C1C1C]', 
    overlayColor: 'bg-black/60' 
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.5, ease: "easeIn" }
  }
};

const Contact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsTransitioning(false), 1000);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={`relative text-white overflow-hidden h-96 min-h-[530px] flex items-center transition-colors duration-1000 ${slides[currentSlide].bgColor}`}>

        {/* Background Slides */}
        <div className="absolute inset-0 transition-all duration-1000">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={`absolute inset-0 ${slide.overlayColor} transition-all duration-1000`}></div>
            </div>
          ))}
        </div>

        {/* Decorative blur circles */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl"></div>
        </div>

        {/* Slide Content with Framer Motion */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-20 w-full">
          <div className="text-center">
            <AnimatePresence mode='wait'>
              <motion.h1
                key={`title-${currentSlide}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>
            </AnimatePresence>
            
            <AnimatePresence mode='wait'>
              <motion.p
                key={`subtitle-${currentSlide}`}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={textVariants}
                className="text-lg md:text-xl max-w-2xl mx-auto text-[#D4AF37]"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </AnimatePresence>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 h-px bg-[#D4AF37] w-32 mx-auto"
            />
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setTimeout(() => setIsTransitioning(false), 1000);
                }, 200);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#D4AF37] scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <ContacUs/>
    </>
  );
};

export default Contact;