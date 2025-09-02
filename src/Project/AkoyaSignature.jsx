import React from "react";
import { motion } from "framer-motion";

function AkoyaSignature() {
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };


  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-12 bg-gray-100 px-4 md:px-12">

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={item}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          Akoya Signature Fragrances
        </motion.h2>
        <motion.p 
          variants={item}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Premium scents crafted to elevate your laundry experience
        </motion.p>
      </motion.div>


      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
       
        <motion.div variants={item}>
          <ProductCard
            title="Moony Akoya"
            img="https://lundary.vercel.app/home/moony.jpg"
            desc="A soft, dreamy scent that refreshes your laundry  grace."
          />
        </motion.div>

        <motion.div variants={item}>
          <ProductCard
            title="Orchid Akoya"
            img="https://lundary.vercel.app/home/orchard.jpg"
            desc="Elegant floral notes to enhance freshness in every fabric."
          />
        </motion.div>

        
        <motion.div variants={item}>
          <ProductCard
            title="Elixr by Akoya"
            img="https://lundary.vercel.app/home/elixr.jpg"
            desc="A rich and luxurious blend for a signature fragrance finish."
          />
        </motion.div>

        
        <motion.div variants={item}>
          <ProductCard
            title="Imperial Akoya"
            img="https://lundary.vercel.app/home/imperial.jpg"
            desc="Royal and bold—crafted for the finest laundry experience."
          />
        </motion.div>
      </motion.div>
    </div>
  );
}


function ProductCard({ title, img, desc }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl  hover:scale-105 transition-all duration-300">
      <img className="w-full h-48 object-cover hover:scale-105 transition-all duration-500" src={img} alt={title} />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-[#D4AF37] transition-all duration-300">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{desc}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-[#D4AF37]">7 QAR</span>
          <a
            className="bg-[#D4AF37] text-[#1C1C1C] rounded-2xl px-4 py-1"
             href="/card"
          >
            Add
          </a>
        </div>
      </div>
    </div>
  );
}

export default AkoyaSignature;