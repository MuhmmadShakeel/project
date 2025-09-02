import React from 'react';
import { motion } from 'framer-motion';

function Journey() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.3 }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#f8f5f2]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-light text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          Our Service Journey
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Step 1 */}
        <motion.div 
        className="bg-white p-6 rounded-xl shadow-sm transition"
        variants={cardVariants}
        whileHover="hover"
      >
            <div className="text-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-[#D4AF37] mb-4 mx-auto" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg font-medium mb-2">1. Select Wash Type</h3>
              <p className="text-[#2C2C2C] text-sm">Standard or Express wash options to suit your needs</p>
            </div>
          </motion.div>
          
          {/* Step 2 */}
        <motion.div 
        className="bg-white p-6 rounded-xl shadow-sm transition"
        variants={cardVariants}
        whileHover="hover"
      >
            <div className="text-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-[#D4AF37] mb-4 mx-auto" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M425.7 256c-16.9 0-32.8-9-41.4-23.4L320 126l-64.2 106.6c-8.7 14.5-24.6 23.5-41.5 23.5-4.5 0-9-.6-13.3-1.9L64 215v178c0 14.7 10 27.5 24.2 31l216.2 54.1c10.2 2.5 20.9 2.5 31 0L551.8 424c14.2-3.6 24.2-16.4 24.2-31V215l-137 39.1c-4.3 1.3-8.8 1.9-13.3 1.9zm212.6-112.2L586.8 41c-3.1-6.2-9.8-9.8-16.7-8.9L320 64l91.7 152.1c3.8 6.3 11.4 9.3 18.5 7.3l197.9-56.5c9.9-2.9 14.7-13.9 10.2-23.1zM53.2 41L1.7 143.8c-4.6 9.2.3 20.2 10.1 23l197.9 56.5c7.1 2 14.7-1 18.5-7.3L320 64 69.8 32.1c-6.9-.8-13.5 2.7-16.6 8.9z"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg font-medium mb-2">2. Choose Garments</h3>
              <p className="text-[#2C2C2C] text-sm">From daily wear to delicate couture - we handle all</p>
            </div>
          </motion.div>
          
        <motion.div 
        className="bg-white p-6 rounded-xl shadow-sm transition"
        variants={cardVariants}
        whileHover="hover"
      >
            <div className="text-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" className="text-[#D4AF37] mb-4 mx-auto" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M235.63,160H84.37a64,64,0,0,0-63.74,58.21L.27,442.21A64,64,0,0,0,64,512H256a64,64,0,0,0,63.74-69.79l-20.36-224A64,64,0,0,0,235.63,160ZM160,416c-33.12,0-60-26.33-60-58.75,0-25,35.7-75.47,52-97.27A10,10,0,0,1,168,260c16.33,21.8,52,72.27,52,97.27C220,389.67,193.12,416,160,416ZM379.31,94.06,336,50.74A64,64,0,0,0,290.75,32H224A32,32,0,0,0,192,0H128A32,32,0,0,0,96,32v96H224V96h66.75l43.31,43.31a16,16,0,0,0,22.63,0l22.62-22.62A16,16,0,0,0,379.31,94.06Z"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg font-medium mb-2">3. Steam Finishing</h3>
              <p className="text-[#2C2C2C] text-sm">Professional pressing for impeccable results</p>
            </div>
          </motion.div>
          
          {/* Step 4 */}
 <motion.div 
        className="bg-white p-6 rounded-xl shadow-sm transition"
        variants={cardVariants}
        whileHover="hover"
      >
            <div className="text-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#D4AF37] mb-4 mx-auto" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224 32c0-17.67-14.33-32-32-32h-64c-17.67 0-32 14.33-32 32v96h128V32zm256 96c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm-256 32H96c-53.02 0-96 42.98-96 96v224c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V256c0-53.02-42.98-96-96-96zm-64 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zM480 96c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm-96 32c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm-96-96c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm96 0c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm96 192c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg font-medium mb-2">4. Fragrance Infusion</h3>
              <p className="text-[#2C2C2C] text-sm">Luxury scents for men and women</p>
            </div>
          </motion.div>
          
          {/* Step 5 */}
         <motion.div 
        className="bg-white p-6 rounded-xl shadow-sm transition"
        variants={cardVariants}
        whileHover="hover"
      >
            <div className="text-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#D4AF37] mb-4 mx-auto" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg font-medium mb-2">5. Packaging</h3>
              <p className="text-[#2C2C2C] text-sm">Choose from our premium wrapping options</p>
            </div>
          </motion.div>
       <motion.div 
        className="bg-white p-6 rounded-xl shadow-sm transition"
        variants={cardVariants}
        whileHover="hover"
      >
            <div className="text-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#D4AF37] mb-4 mx-auto" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M509.5 184.6L458.9 32.8C452.4 13.2 434.1 0 413.4 0H272v192h238.7c-.4-2.5-.4-5-1.2-7.4zM240 0H98.6c-20.7 0-39 13.2-45.5 32.8L2.5 184.6c-.8 2.4-.8 4.9-1.2 7.4H240V0zM0 224v240c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V224H0z"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg font-medium mb-2">6. Personalization</h3>
              <p className="text-[#2C2C2C] text-sm">Add a custom card for gifts</p>
            </div>
          </motion.div>
          
     <motion.div 
        className="bg-white p-6 rounded-xl shadow-sm transition"
        variants={cardVariants}
        whileHover="hover"
      >
            <div className="text-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-[#D4AF37] mb-4 mx-auto" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg font-medium mb-2">7. WhatsApp Checkout</h3>
              <p className="text-[#2C2C2C] text-sm">Easy confirmation via WhatsApp</p>
            </div>
          </motion.div>
          
          {/* Step 8 */}
        <motion.div 
        className="bg-white p-6 rounded-xl shadow-sm transition"
        variants={cardVariants}
        whileHover="hover"
      >
            <div className="text-center">
              <motion.div variants={iconVariants} whileHover="hover">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="text-[#D4AF37] mb-4 mx-auto" height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path>
                </svg>
              </motion.div>
              <h3 className="text-lg font-medium mb-2">8. AI Assistance</h3>
              <p className="text-[#2C2C2C] text-sm">3D avatars guide you in Arabic & English</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Journey;