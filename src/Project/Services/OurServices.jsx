import React, { useState } from 'react';

const OurServices = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Dry Cleaning', 'Pressing', 'Specialty', 'Traditional', 'Express', 'Add‑on'];

  // Filter services based on active filter
  const filteredServices = activeFilter === 'All' 
    ? servicesData 
    : servicesData.filter(service => 
        service.tags?.includes(activeFilter.toLowerCase()) ||
        service.title.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-[#1C1C1C] mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3 tracking-tight">Our Services</h2>
          <div className="flex justify-center items-center">
            <div className="w-12 h-px bg-[#D4AF37] mx-4"></div>
            <p className="text-lg text-[#D4AF37] tracking-widest font-medium">LUXURY GARMENT CARE</p>
            <div className="w-12 h-px bg-[#D4AF37] mx-4"></div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                filter === activeFilter 
                  ? 'bg-[#1C1C1C] text-[#D4AF37]' 
                  : 'bg-white text-[#1C1C1C] hover:bg-[#1C1C1C]/10'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl  hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src={service.image}
                />
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#1C1C1C] text-xl w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                  {service.emoji}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-medium text-[#1C1C1C]">{service.title}</h3>
                  <span className="text-[#D4AF37] font-medium">From {service.price}</span>
                </div>
                <p className="text-[#2C2C2C] mb-4">{service.description}</p>
                <div className="h-px bg-[#D4AF37]/30 my-4"></div>
                <a href="/card">
                  <button className="w-full px-4 py-2.5 bg-[#D4AF37] text-[#1C1C1C] rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#1C1C1C] hover:text-[#D4AF37] transition-colors">
                    Order
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const servicesData = [
  {
    image: "https://lundary.vercel.app/home/dryCleaning.jpg",
    emoji: "🧥",
    title: "Dry Cleaning",
    price: "50 QAR",
    description: "Expert care for suits and delicate fabrics using eco-friendly solvents",
    tags: ["dry cleaning"]
  },
  {
    image: "https://lundary.vercel.app/home/exectivePressing.jpg",
    emoji: "👔",
    title: "Executive Pressing",
    price: "35 QAR",
    description: "Crisp finishes for business attire with precision steam technology",
    tags: ["pressing"]
  },
  {
    image: "https://lundary.vercel.app/home/care.jpg",
    emoji: "👗",
    title: "Couture Care",
    price: "120 QAR",
    description: "Hand-cleaning for designer garments and delicate fabrics",
    tags: ["specialty"]
  },
  {
    image: "https://lundary.vercel.app/home/resturation.jpg",
    emoji: "🕌",
    title: "Bisht Restoration",
    price: "80 QAR",
    description: "Traditional cleaning and pressing for Qatari formal wear",
    tags: ["traditional"]
  },
  {
    image: "https://lundary.vercel.app/home/sehedulePickup.jpg",
    emoji: "⚡",
    title: "Express Service",
    price: "+30% Premium",
    description: "3-hour turnaround for urgent garment needs",
    tags: ["express"]
  },
  {
    image: "https://lundary.vercel.app/home/fragrance.jpg",
    emoji: "🌸",
    title: "Fragrance Infusion",
    price: "20 QAR",
    description: "Luxury scent options for your garments",
    tags: ["add-on"]
  },
  {
    image: "https://lundary.vercel.app/services/dishdasha.webp",
    emoji: "👳‍♂️",
    title: "Dishdasha",
    price: "45 QAR",
    description: "Professional care for men's traditional Qatari garment",
    tags: ["traditional"]
  },
  {
    image: "https://lundary.vercel.app/services/child_dishdasha.jpg",
    emoji: "👦",
    title: "Child Dishdasha",
    price: "35 QAR",
    description: "Specialized care for children's traditional garments",
    tags: ["traditional"]
  },
  {
    image: "https://lundary.vercel.app/services/bisht.jpg",
    emoji: "🪔",
    title: "Bisht",
    price: "90 QAR",
    description: "Premium care for ceremonial cloak with gold detailing",
    tags: ["traditional", "specialty"]
  },
  {
    image: "https://lundary.vercel.app/services/ghutra.jpg",
    emoji: "🧕",
    title: "Ghutra",
    price: "25 QAR",
    description: "Gentle cleaning for traditional headwear",
    tags: ["traditional"]
  },
  {
    image: "https://lundary.vercel.app/services/kurta.jpg",
    emoji: "👘",
    title: "Kurta",
    price: "40 QAR",
    description: "Care for traditional South Asian tunic",
    tags: ["traditional"]
  },
  {
    image: "https://lundary.vercel.app/services/kurtaPajama.jpg",
    emoji: "👖",
    title: "Kurta Pyjama (Set)",
    price: "60 QAR",
    description: "Complete set cleaning for traditional attire",
    tags: ["traditional"]
  },
  {
    image: "https://lundary.vercel.app/services/kameez.jpg",
    emoji: "👕",
    title: "Kameez",
    price: "45 QAR",
    description: "Professional care for traditional long shirts",
    tags: ["traditional"]
  },
  {
    image: "https://lundary.vercel.app/services/jalabiya.jpg",
    emoji: "👚",
    title: "Jalabiya",
    price: "55 QAR",
    description: "Specialized care for flowing traditional gowns",
    tags: ["traditional"]
  },
  {
    image: "https://lundary.vercel.app/services/abaya.jpg",
    emoji: "🧕",
    title: "Abaya",
    price: "50 QAR",
    description: "Professional cleaning for everyday abayas",
    tags: ["traditional"]
  },
  {
    image: "https://lundary.vercel.app/services/abaya_special.jpg",
    emoji: "✨",
    title: "Abaya Special",
    price: "80 QAR",
    description: "Premium care for embellished abayas",
    tags: ["traditional", "specialty"]
  },
  {
    image: "https://lundary.vercel.app/services/hijab.png",
    emoji: "🧣",
    title: "Hijab",
    price: "20 QAR",
    description: "Delicate cleaning for headscarves",
    tags: ["traditional"]
  },
  {
    image: "https://lundary.vercel.app/services/gent_suit.jpg",
    emoji: "👔",
    title: "Gent Suit (3pcs)",
    price: "75 QAR",
    description: "Complete care for 3-piece suits",
    tags: ["dry cleaning"]
  },
  {
    image: "https://lundary.vercel.app/services/dress.jpg",
    emoji: "👗",
    title: "Dress (Short)",
    price: "45 QAR",
    description: "Care for cocktail and summer dresses",
    tags: ["dry cleaning"]
  },
  {
    image: "https://lundary.vercel.app/services/dressLong.jpg",
    emoji: "👰",
    title: "Dress (Long)",
    price: "65 QAR",
    description: "Specialized care for evening gowns",
    tags: ["dry cleaning", "specialty"]
  },
  {
    image: "https://lundary.vercel.app/services/overcoat.jpg",
    emoji: "🧥",
    title: "Overcoat",
    price: "70 QAR",
    description: "Winter coat cleaning and preservation",
    tags: ["dry cleaning"]
  },
  {
    image: "https://lundary.vercel.app/services/military_suite.jpg",
    emoji: "🎖️",
    title: "Military Uniform",
    price: "85 QAR",
    description: "Regimental standard cleaning and pressing",
    tags: ["dry cleaning", "pressing"]
  },
  {
    image: "https://lundary.vercel.app/services/blouse.jpg",
    emoji: "👚",
    title: "Blouse (Special)",
    price: "55 QAR",
    description: "Delicate care for embellished tops",
    tags: ["specialty"]
  },
  {
    image: "https://lundary.vercel.app/services/bathrob.jpg",
    emoji: "🛁",
    title: "Bath Robe",
    price: "40 QAR",
    description: "Deep cleaning for plush bathrobes",
    tags: ["dry cleaning"]
  }
];

export default OurServices;