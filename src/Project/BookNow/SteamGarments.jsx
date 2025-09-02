import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const SteamGarments = () => {
  const [progress] = useState(50); 
  const [steamSelected, setSteamSelected] = useState(false);
  const [incenseSelected, setIncenseSelected] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState(null);
  const [selectedClothes, setSelectedClothes] = useState([]);

  useEffect(() => {
    try {
      const service = JSON.parse(localStorage.getItem('selectedService'));
      setSelectedService(service || {
        name: "Washing & Iron",
        price: "25.00 QAR"
      });

      const clothes = JSON.parse(localStorage.getItem('selectedClothes'));
      setSelectedClothes(clothes || [
        { name: "Socks", quantity: 1, price: "2.00 QAR" }
      ]);
    } catch (err) {
      setError("Failed to load order data. Please try again.");
      console.error("Parsing error:", err);
    }
  }, []);

  const handleNext = () => {
    try {
      const selections = {
        steamService: steamSelected,
        incenseService: incenseSelected
      };
      localStorage.setItem('additionalServices', JSON.stringify(selections));
      navigate("/frag");
    } catch (err) {
      setError("Failed to save selections. Please try again.");
      console.error("Save error:", err);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const removeService = () => {
    try {
      localStorage.removeItem('selectedService');
      setSelectedService(null);
      navigate("/");
    } catch (err) {
      setError("Failed to remove service. Please try again.");
      console.error("Remove service error:", err);
    }
  };

  const removeClothingItem = (itemName) => {
    try {
      const updatedClothes = selectedClothes.filter(item => item.name !== itemName);
      setSelectedClothes(updatedClothes);
      localStorage.setItem('selectedClothes', JSON.stringify(updatedClothes));
    } catch (err) {
      setError("Failed to remove item. Please try again.");
      console.error("Remove item error:", err);
    }
  };

  const updateQuantity = (itemName, newQuantity) => {
    try {
      const updatedClothes = selectedClothes.map(item =>
        item.name === itemName ? { ...item, quantity: Math.max(1, newQuantity) } : item
      );
      setSelectedClothes(updatedClothes);
      localStorage.setItem('selectedClothes', JSON.stringify(updatedClothes));
    } catch (err) {
      setError("Failed to update quantity. Please try again.");
      console.error("Update quantity error:", err);
    }
  };
const calculateTotal = () => {
  try {
    let total = 0;

    // Add service price
    if (selectedService?.price) {
      const servicePrice = typeof selectedService.price === 'string'
        ? parseFloat(selectedService.price.replace(/[^\d.-]/g, '')) || 0
        : parseFloat(selectedService.price) || 0;
      total += servicePrice;
    }

    // Add clothes prices
    selectedClothes.forEach(item => {
      if (item?.price) {
        const itemPrice = typeof item.price === 'string'
          ? parseFloat(item.price.replace(/[^\d.-]/g, '')) || 0
          : parseFloat(item.price) || 0;
        total += (item.quantity || 1) * itemPrice;
      }
    });

    // Add optional services
    if (steamSelected) total += 5;
    if (incenseSelected) total += 3;

    return isNaN(total) ? "0.00 QAR" : `${total.toFixed(2)} QAR`;
  } catch (err) {
    console.error("Calculation error:", err);
    return "0.00 QAR";
  }
};


  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
          <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
          <p className="mb-4">{error}</p>
          <button
            onClick={() => {
              setError(null);
              navigate("/");
            }}
            className="px-4 py-2 bg-[#D4AF37] text-white rounded hover:bg-[#c9a227]"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 pt-16 sm:pt-20 px-3 sm:px-4 lg:px-8 relative" style={{ 
      background: 'linear-gradient(rgb(44, 36, 22) 0%, rgb(74, 59, 42) 30%, rgb(107, 91, 71) 60%, rgb(249, 247, 244) 100%)'
    }}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-[#B8941F] mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-[#F4E4B8] mix-blend-multiply filter blur-2xl animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 h-1.5 sm:h-2">
                <div 
                  className="bg-[#D4AF37] h-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="p-4 sm:p-6 text-center" style={{ background: 'linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)' }}>
                <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">AKOYA PREMIUM LAUNDRY</h2>
                <p className="text-gray-300 mt-1 text-sm sm:text-base">Step 3 of 6</p>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-6" dir="ltr">
                  <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">
                    Do you want us to steam the garments?
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button 
                      className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-all ${steamSelected ? 'border-[#D4AF37] bg-[#FFF9E6]' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setSteamSelected(true)}
                    >
                      Yes
                    </button>
                    <button 
                      className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-all ${!steamSelected ? 'border-[#D4AF37] bg-[#FFF9E6]' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setSteamSelected(false)}
                    >
                      No
                    </button>
                  </div>

                  <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">
                    Do you want incense service?
                  </h3>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button 
                      className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-all ${incenseSelected ? 'border-[#D4AF37] bg-[#FFF9E6]' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setIncenseSelected(true)}
                    >
                      Yes
                    </button>
                    <button 
                      className={`flex-1 px-4 py-3 rounded-lg border text-sm font-medium transition-all ${!incenseSelected ? 'border-[#D4AF37] bg-[#FFF9E6]' : 'border-gray-200 hover:border-gray-300'}`}
                      onClick={() => setIncenseSelected(false)}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-between gap-3">
                  <button 
                    className="w-full sm:w-auto px-4 py-2.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button 
                    className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-[#D4AF37] text-white hover:bg-[#c9a227]"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg sticky top-20 max-h-[85vh] overflow-hidden flex flex-col">
              <div className="p-4 border-b border-gray-100 text-center">
                <h3 className="text-lg font-bold text-[#D4AF37]">Order Summary</h3>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                {selectedService && (
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-sm font-medium">Service Type:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{selectedService.name}</span>
                      <button 
                        className="text-red-500 hover:text-red-700 p-1"
                        onClick={removeService}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                <div className="border-b pb-3 mt-2">
                  <p className="font-medium mb-2 text-sm">Garments:</p>
                  {selectedClothes.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-2 mb-2">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-medium">{item.name}</span>
                        <button 
                          className="text-red-500 hover:text-red-700 p-1"
                          onClick={() => removeClothingItem(item.name)}
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center space-x-2">
                          <button onClick={() => updateQuantity(item.name, item.quantity - 1)} disabled={item.quantity <= 1} className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded text-xs font-bold">-</button>
                          <span className="text-xs">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.name, item.quantity + 1)} className="w-6 h-6 bg-gray-200 hover:bg-gray-300 rounded text-xs font-bold">+</button>
                        </div>
                        <span className="text-xs">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t p-4 bg-gray-50">
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-gray-700">Total:</span>
                  <span className="text-[#D4AF37]">{calculateTotal()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteamGarments;
