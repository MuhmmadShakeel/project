import React from 'react';
import { motion } from 'framer-motion';
import Choose from './Choose';
import Journey from './Journey';
import Fabric from './Fabric';

function About() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5 }
    }
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden font-sans">
        {/* Background with fade-in animation */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, #4a4a4a 0%, #d6d6d6 100%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Content container with staggered animations */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title with animation */}
          <motion.h1
            className="text-4xl md:text-6xl font-light text-white mb-6"
            variants={itemVariants}
          >
            Luxury Laundry. Reimagined.
          </motion.h1>

          {/* Divider with text - animated */}
          <motion.div 
            className="flex items-center mb-8"
            variants={itemVariants}
          >
            <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
            <p className="text-xl text-[#D4AF37] tracking-widest">Akoya Collection</p>
            <div className="w-16 h-px bg-[#D4AF37] mx-4"></div>
          </motion.div>

          {/* Button with hover and tap animations */}
         <a href="/work">
          <motion.button
            className="bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-8 py-3 rounded-full text-lg font-medium"
            aria-label="Schedule Laundry Pickup"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Pickup
          </motion.button>
         </a>
        </motion.div>
      </div>

      {/* Animated sections with fade-in effects */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <Choose />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <Journey />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
      >
        <Fabric />
      </motion.div>
    </>
  );
}

export default About;