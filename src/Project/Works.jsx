import React from "react";
import { motion } from "framer-motion";
import { FaCalendar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";

function Works() {
  const steps = [
    {
      step: 1,
      title: "Schedule Your Pickup",
      icon: <FaCalendar />,
      video: "src/assets/Pickup (1).mp4",
      bulletPoints: [
        "24/7 booking availability",
        "Recurring pickup scheduling available",
      ],
      description:
        "Book through our app, WhatsApp, or website. We offer flexible 2-hour pickup windows.",
      reverse: false,
    },
    {
      step: 2,
      title: "Professional Collection",
      icon: <IoBag />,
      video: "src/assets/professional_collection.mp4",
      bulletPoints: [
        "Contactless pickup available",
        "Digital receipt provided",
      ],
      description:
        "Our uniformed valets arrive in discreet luxury vehicles with garment bags.",
      reverse: true,
    },
    {
      step: 3,
      title: "Expert Processing",
      icon: <BsLightningCharge />,
      video: "src/assets/ExpertProcessing.mp4",
      bulletPoints: [
        "Individual garment tracking",
        "Quality control at every stage",
      ],
      description:
        "Your garments receive specialized care at our state-of-the-art facility.",
      reverse: false,
    },
    {
      step: 4,
      title: "Luxury Delivery",
      icon: <MdOutlineDone />,
      video: "src/assets/luxury.jpg",
      bulletPoints: [
        "Same-day delivery available",
        "Hanger-ready with protective covers",
      ],
      description:
        "Impeccably packaged garments returned at your preferred time.",
      reverse: true,
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  return (
    <div className="bg-[#f8f5f2] py-12 px-6 md:px-16 lg:px-24 relative overflow-hidden text-left">
      {/* Decorative background blur circles */}
      <motion.div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#1C1C1C] mix-blend-multiply filter blur-3xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        ></motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={item}
            className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3"
          >
            How It Works
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-[#D4AF37] text-sm tracking-widest font-medium mb-1"
          >
            SEAMLESS PICKUP PROCESS
          </motion.p>
          <motion.div 
            variants={item}
            className="w-12 h-px bg-[#D4AF37] mx-auto"
          ></motion.div>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line (desktop) */}
          <motion.div 
            className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[#D4AF37] transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>

          {/* Loop through steps */}
          {steps.map((stepData, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={container}
              className={`relative flex flex-col ${
                stepData.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-16 mb-24`}
            >
              {/* Media (video or image) */}
              <motion.div 
                variants={item}
                className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300"
              >
                {stepData.video.endsWith(".jpg") || stepData.video.endsWith(".png") ? (
                  <motion.img
                    src={stepData.video}
                    alt={stepData.title}
                    className="w-full h-64 md:h-80 object-cover"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                ) : (
                  <motion.video
                    src={stepData.video}
                    className="w-full h-64 md:h-80 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>

              {/* Text content */}
              <motion.div 
                variants={item}
                className="w-full md:w-1/2 relative"
              >
                {/* Step number (desktop) */}
                <motion.div
                  className={`hidden md:flex absolute ${
                    stepData.reverse ? "-right-24" : "-left-24"
                  } top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#D4AF37] text-white items-center justify-center font-bold text-xl shadow-lg`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.3 }}
                >
                  {stepData.step}
                </motion.div>

                {/* Card box */}
                <motion.div 
                  className="bg-white p-8 rounded-xl shadow-lg relative z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  {/* Step number (mobile) */}
                  <motion.div 
                    className="md:hidden absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold shadow-md"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.2 }}
                  >
                    {stepData.step}
                  </motion.div>

                  {/* Heading */}
                  <motion.h3 
                    className="text-xl md:text-2xl font-medium text-[#1C1C1C] mb-4 flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-[#D4AF37]">{stepData.icon}</span>
                    {stepData.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p 
                    className="text-sm text-gray-600 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {stepData.description}
                  </motion.p>
                  
                  <motion.hr 
                    className="border-t border-gray-300 my-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  />

                  {/* Bullet Points */}
                  <motion.ul 
                    className="text-sm text-gray-600 space-y-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {stepData.bulletPoints.map((point, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (i * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <span className="text-[#D4AF37] text-base mt-0.5">
                          <MdOutlineDone />
                        </span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, type: "spring" }}
          className="text-center mt-12"
        >
         <a href="/about">
           <motion.button 
            className="px-8 py-4 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center mx-auto gap-3 text-sm tracking-wider hover:scale-105 transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#D4AF37",
              color: "#1C1C1C"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Your Pickup +
          </motion.button>
         </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Works;
