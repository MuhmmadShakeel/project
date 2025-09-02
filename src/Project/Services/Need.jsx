import React from 'react';

const Need = () => {
  return (
    <div className="bg-[#1C1C1C] py-20 px-6 md:px-16 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-light text-[#D4AF37] mb-6">
          Need Personalized Service?
        </h3>
        <p className="text-gray-300 mb-8">
        Our VIP concierge team is available 24/7 to handle special requests, delicate items, or bulk orders for businesses and residences.
        </p>
        <a 
          href="/contact" 
          className="inline-block"
        >
         <a href="/us">
           <button className="px-8 py-3 bg-[#D4AF37] hover:bg-[#e6c04d] text-[#1C1C1C] rounded-full font-medium flex items-center gap-2 mx-auto hover:scale-105 transition-all duration-300">
            Contact Concierge
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>
          </button>
         </a>
        </a>
      </div>
    </div>
  );
};

export default Need;