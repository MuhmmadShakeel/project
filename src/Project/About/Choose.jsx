import React from 'react';
import { motion } from 'framer-motion';

function Choose() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-light text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          Why Choose <span className="text-[#D4AF37]">Akoya</span>
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Feature Card 1 */}
          <motion.div 
            className="bg-[#f8f5f2] p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 512 512" 
                className="text-[#D4AF37] mx-auto mb-6" 
                height="40" 
                width="40" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-medium mb-4">Premium Quality</h3>
            <p className="text-[#2C2C2C]">We use only the finest eco-friendly detergents and state-of-the-art equipment</p>
          </motion.div>
          
          {/* Feature Card 2 */}
          <motion.div 
            className="bg-[#f8f5f2] p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 640 512" 
                className="text-[#D4AF37] mx-auto mb-6" 
                height="40" 
                width="40" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-medium mb-4">Personalized Service</h3>
            <p className="text-[#2C2C2C]">Tailored solutions for each garment with our expert fabric specialists</p>
          </motion.div>
          
          {/* Feature Card 3 */}
          <motion.div 
            className="bg-[#f8f5f2] p-8 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 512 512" 
                className="text-[#D4AF37] mx-auto mb-6" 
                height="40" 
                width="40" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
              </svg>
            </motion.div>
            <h3 className="text-xl font-medium mb-4">Convenience</h3>
            <p className="text-[#2C2C2C]">24/7 booking with flexible pickup and delivery options</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Choose;