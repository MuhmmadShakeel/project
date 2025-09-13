import React from "react";
import footerLogo from "../assets/imgfooter.png";
import bottomLogo from "../assets/bottomimg.png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white overflow-hidden border-t border-[#D4AF37]/ mb-[-30px]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <img
            src={footerLogo}
            alt="Akoya Deluxe Cleaning Logo"
            loading="lazy"
            className="w-24 mt-4 mx-auto md:ml-4"
          />
          <p className="text-white/70 mb-4 leading-relaxed mt-4">
            Luxury garment care redefined. Serving Doha's discerning clients
            with unparalleled quality and service.
          </p>
        </div>

      <div>
  <h3 className="text-lg font-medium text-[#D4AF37] mb-6 tracking-wider">
    OUR SERVICES
  </h3>
  <ul className="space-y-2 text-gray-300 text-base">
    {[
      "Premium Laundry",
      "Dry Cleaning",
      "Steam Pressing",
      "Fragrance Infusion",
      "Couture Care",
      "VIP Club",
    ].map((service, index) => (
      <li
        key={index}
        className={`transition-transform duration-300 hover:${
          index % 2 === 0 ? "-translate-x-1" : "translate-x-1"
        } hover:text-yellow-400`}
      >
        <span className="inline-flex items-center gap-2 transform transition-transform duration-300 hover:scale-105">
          <span className="text-yellow-300 text-2xl">›</span> {service}
        </span>
      </li>
    ))}
  </ul>
</div>


        <div>
          <h3 className="text-lg font-medium text-[#D4AF37] mb-6 tracking-wider">
            CONTACT US
          </h3>
          <ul className="space-y-2 text-gray-300 text-base">
            <li className="flex">
              <svg
                className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998..."
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>{" "}
             <span className="
             hover:text-[#D4AF37] transition-all duration-300">Muhammad Shakeel</span>
            </li>
            <li className="flex">
              <svg
                className="w-5 h-5 text-[rgb(212,175,55)] flex-shrink-0  "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28..."
                ></path>
              </svg>{" "}
              <span  className="
             hover:text-[#D4AF37] transition-all duration-300">
                              +92 3256768872

              </span>
              
            </li>
            <li className="flex">
              <svg className="w-5 h-5 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2..."></path>
              </svg>{" "}
              <a
                href="mailto:info@akoyalaundry.com"
                className="hover:text-yellow-400 transition"
              >
               mshakiroy@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium text-[#D4AF37] mb-6 tracking-wider">
            NEWSLETTER
          </h3>
          <p className="text-base text-gray-300 mb-4">
            Subscribe for exclusive offers and garment care tips.
          </p>
          <form className="space-y-4">
            <input 
              placeholder="Your email address" 
              className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#D4AF37]/30 rounded focus:outline-none focus:ring-1 focus:ring-[#D4AF37] text-white placeholder-white/50" 
              type="email" 
            />
            <button 
              className="w-full px-6 py-3 bg-[#D4AF37] text-[#1C1C1C] font-medium rounded hover:scale-105 transition-all duration-500" 
              tabIndex="0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div class="border-t border-[#D4AF37]/10 py-6">
        <div className="fixed right-4 bottom-4 z-10">
          <img
            src={bottomLogo}
            alt="Akoya Footer Logo"
            loading="lazy"
            className="h-17 w-17 rounded-full object-fill shadow-lg hover:scale-110 transition-transform"
          />
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} <span className="text-[#D4AF37] font-semibold">Muhammad Shakeel</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Crafted with ❤️ using React & Tailwind CSS
          </p>
        </div>
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-end me-0 items-end text-white/50 text-sm">
            
      <div className="flex gap-6 mt-4 md:mt-0">
        <a 
          className="hover:text-[#D4AF37] transition-colors" 
          href="/privacy" 
          data-discover="true"
        >
          Privacy Policy
        </a>
        <a 
          className="hover:text-[#D4AF37] transition-colors" 
          href="/terms" 
          data-discover="true"
        >
          Terms of Service
        </a>
        <a 
          className="hover:text-[#D4AF37] transition-colors" 
          href="/sitemap" 
          data-discover="true"
        >
          Sitemap
        </a>
      </div>
    </div>
        </div>
      
    </footer>
  );
};

export default Footer;