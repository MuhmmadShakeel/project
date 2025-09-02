
import React from 'react';
import { motion } from 'framer-motion';
import sign01 from '../assets/sign01.jpg';
import sign02 from '../assets/sign02.jpg';
import sign03 from '../assets/sign03.jpg';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function SignatureLine() {
  const navigate = useNavigate(); // ✅ you need this

  const cards = [
    {
      img: sign01,
      title: 'The Platinum Care',
      icon: '✨',
      desc: 'Our highest tier service for your most precious garments. Hand-washed, steamed, and wrapped in protective tissue.',
    },
    {
      img: sign02,
      title: 'Executive Collection',
      icon: '👔',
      desc: 'Precision care for business attire. Perfect creases, stain removal, and fabric revitalization for your professional image.',
    },
    {
      img: sign03,
      title: 'Couture Preservation',
      icon: '🧵',
      desc: 'Specialized care for designer pieces and delicate fabrics. Museum-quality cleaning to maintain texture and color integrity.',
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = {
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

  const handleClick = () => {
    navigate("/our");
  };
const handleCHange =()=>{
  navigate("/services")
}
const helloGarments =()=>{

  navigate("/services")
}
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="bg-white py-12 px-4 md:px-12 lg:px-24"
    >
      {/* Header Section */}
      <motion.div variants={item} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-light text-[#1C1C1C] mb-3 tracking-tight">
          Signature Lines
        </h1>
        <p className="text-xl text-[#D4AF37] tracking-widest font-medium relative inline-block before:content-[''] before:absolute before:w-16 before:h-[1px] before:bg-[#D4AF37] before:left-[-70px] before:top-1/2 after:content-[''] after:absolute after:w-16 after:h-[1px] after:bg-[#D4AF37] after:right-[-70px] after:top-1/2">
          THE AKOYA COLLECTION
        </p>
      </motion.div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative group rounded-2xl overflow-hidden shadow-xl"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-[430px] overflow-hidden">
              <motion.img
                src={card.img}
                alt={card.title}
                className="w-full h-80 object-cover rounded-2xl brightness-95"
                whileHover={{ 
                  scale: 1.05,
                  brightness: 1.1,
                  transition: { duration: 0.5 }
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

              <motion.div 
                className="absolute top-5 left-5 text-4xl w-14 h-14 flex items-center justify-center bg-[#D4AF37] rounded-full text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {card.icon}
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <motion.h3 
                  className="text-2xl font-medium mb-2"
                  whileHover={{ x: 5 }}
                >
                  {card.title}
                </motion.h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  {card.desc}
                </p>
                <motion.button onClick={handleClick}
                  className="mt-4 px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                  style={{ backgroundColor: 'rgb(212, 175, 55)', color: 'rgb(28, 28, 28)' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover <span className="text-lg">➜</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <motion.button  onClick={handleCHange}
        variants={item}
        className="px-8 text-center mt-16 py-3 border border-[#1C1C1C] text-[#1C1C1C] rounded-full hover:bg-[#1C1C1C] hover:text-white transition-all duration-300 flex items-center mx-auto gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View All Collection <FaArrowRightLong />
      </motion.button>

      {/* Services Section */}
      <motion.div variants={item} className="text-center mb-16 mt-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">How Would You Like It Washed?</h2>
        <p className="text-[#D4AF37] font-semibold text-lg tracking-wide uppercase">Choose your experience</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 max-w-full mx-auto">
        <motion.div 
          variants={item}
          className="bg-[#F5E1DA] p-8 rounded-3xl shadow-lg"
          whileHover={{ 
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
        >
          <span className="text-5xl mb-5">🧼</span>
          <h3 className="text-2xl font-bold mt-4 text-[#1C1C1C] mb-2">Standard Wash</h3>
          <p className="text-[#2C2C2C] mb-4">Our signature 48-hour service with gentle cleaning, eco-friendly detergents, and basic folding.</p>
          <h3 className="text-[#D4AF37] font-medium text-lg">From 50 QAR</h3>
        </motion.div>
        
        <motion.div 
          variants={item}
          className="bg-[#F5E1DA] p-8 rounded-3xl shadow-lg"
          whileHover={{ 
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
        >
          <span className="text-5xl mb-5">⚡</span>
          <h3 className="text-2xl mt-4 font-bold text-[#1C1C1C] mb-2">Express Wash</h3>
          <p className="text-[#2C2C2C] mb-4">Need it fast? Get 24-hour turnaround, priority processing, and premium care.</p>
          <h3 className="text-[#D4AF37] font-medium text-lg">From 80 QAR</h3>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div 
        variants={item}
        className="mt-12 text-center"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
      >
        <motion.button  onClick={helloGarments}
          className="bg-[#D4AF37] text-[#1C1C1C] font-semibold px-8 py-4 rounded-full shadow-md"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Continue to Garment Selection
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default SignatureLine;