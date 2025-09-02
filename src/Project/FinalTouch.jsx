import React, { useState } from "react";
import { motion } from "framer-motion";
import plasticWrap from "../assets/final01.jpg";
import fabricWrap from "../assets/final02.jpg";
import giftBox from "../assets/final03.jpg";
import { IoIosBasket } from "react-icons/io";

const packages = [
  {
    id: 1,
    title: "Plastic Wrap",
    description:
      "Crystal-clear protective wrapping with our embossed gold seal for discreet luxury.",
    features: [
      "Medical-grade transparency",
      "Anti-static interior",
      "Recyclable material",
      "Tamper-evident closure",
    ],
    price: "Included",
    image: plasticWrap,
  },
  {
    id: 2,
    title: "Luxury Fabric Wrap",
    description:
      "Cashmere-lined protective casing with magnetic closure and monogram option.",
    features: [
      "Italian wool exterior",
      "Silk-lined interior",
      "Magnetic seal",
      "Reusable design",
    ],
    price: "+25 QAR",
    image: fabricWrap,
  },
  {
    id: 3,
    title: "Premium Gift Box",
    description:
      "Handcrafted wooden presentation case with velvet interior and scent capsule.",
    features: [
      "Sandalwood construction",
      "French velvet lining",
      "Integrated scent capsule",
      "Heirloom quality",
    ],
    price: "+50 QAR",
    image: giftBox,
  },
];

function FinalTouch() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section className="bg-[#faf9f7] py-12 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3 tracking-tight">
            The Final Touch
          </h2>
          <div className="flex justify-center items-center">
            <div className="w-12 h-px bg-[#D4AF37] mx-4"></div>
            <p className="text-lg text-[#D4AF37] tracking-widest font-medium">
              PACKAGING OPTIONS
            </p>
            <div className="w-12 h-px bg-[#D4AF37] mx-4"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => {
            const isSelected = selectedPackage === pkg.id;

            const badgeStyle = {
              backgroundColor: isSelected ? "#1C1C1C" : "#D4AF37",
              color: isSelected ? "#D4AF37" : "#1C1C1C",
            };

            return (
              <motion.div
                key={pkg.id}
                className="relative group hover:translate-y-2 transition-all duration-300"
                onClick={() => setSelectedPackage(pkg.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 h-full flex flex-col ${
                    isSelected
                      ? "ring-4 ring-[#D4AF37]"
                      : "ring-1 ring-[#00000010]"
                  }`}
                >
                 <div className="relative h-94 overflow-hidden group">
  <img
    src={pkg.image}
    alt={pkg.title}
    className="w-full h-full object-cover transform  group-hover:scale-110 transition-all duration-500"
  />


                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-md"
                        style={badgeStyle}
                      >
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-medium text-[#1C1C1C] mb-2 hover:text-[#D4AF37] transition-all duration-300">
                      {pkg.title}
                    </h3>
                    <p className="text-[#2C2C2C] mb-4 text-sm leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="mt-auto space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start hover:translate-x-2 transition-all duration-300"
                        >
                          <svg
                            className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-[#1C1C1C] leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

           
                  <div
                    className="w-full"
                    style={{
                      height: isSelected ? "4px" : "0px",
                      backgroundColor: "#D4AF37",
                    }}
                  />
                </div>

               
                {isSelected && (
                  <div className="absolute -top-3 -right-8 bg-[#D4AF37] text-white px-8 py-1 font-medium text-xs shadow-lg rotate-[-45deg]" style={{ fontFamily: "Playfair Display, serif" }}>
                    SELECTED
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      
        <div className="text-center mt-16">
          <a href="/book-now">
            <button className="px-8 py-4 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center mx-auto gap-3 text-sm tracking-wider">
              Book Your Order
              <IoIosBasket className="h-5 w-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalTouch;
