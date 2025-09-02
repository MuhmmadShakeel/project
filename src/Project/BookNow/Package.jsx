import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Package = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [garments, setGarments] = useState([]);
  const [fragrance, setFragrance] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const packagingOptions = [
    { id: 1, name: 'Plastic Wrap', description: 'Clean transparent protection', price: 0 },
    { id: 2, name: 'Luxury Fabric Wrap', description: 'Soft-touch premium wrapping', price: 15 },
    { id: 3, name: 'Premium Gift Box', description: 'Elegant box with magnetic closure', price: 30 },
  ];

  // Helper function to parse prices
  const parsePrice = (price) => {
    if (typeof price === 'string') {
      return parseFloat(price.replace(/[^\d.-]/g, '')) || 0;
    }
    return Number(price) || 0;
  };

  const getServicePrice = () => {
    return selectedService?.price ? parsePrice(selectedService.price) : 0;
  };

  // Calculate garments total
  const calculateGarmentsTotal = () => {
    return garments.reduce((total, item) => {
      const price = parsePrice(item.price);
      const quantity = Math.max(1, Number(item.quantity) || 1);
      return total + (price * quantity);
    }, 0);
  };

  // Calculate subtotal (service + garments)
  const calculateSubtotal = () => {
    return getServicePrice() + calculateGarmentsTotal();
  };

  // Calculate total (subtotal + fragrance + packaging)
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const fragrancePrice = fragrance ? 8 : 0;
    const packagingPrice = selectedPackage
      ? packagingOptions.find(p => p.id === selectedPackage)?.price || 0
      : 0;

    return (subtotal + fragrancePrice + packagingPrice).toFixed(2);
  };

  useEffect(() => {
    try {
      // Load data from localStorage
      const service = JSON.parse(localStorage.getItem("selectedService"));
      const clothes = JSON.parse(localStorage.getItem("selectedClothes")) || [];
      const fragranceData = JSON.parse(localStorage.getItem("selectedFragrance"));
      const addons = JSON.parse(localStorage.getItem("additionalServices")) || {};
      
      setSelectedService(service);
      setGarments(clothes);
      setFragrance(fragranceData);
      
      // Load any previously selected package
      const savedPackage = JSON.parse(localStorage.getItem("selectedPackage"));
      if (savedPackage) {
        setSelectedPackage(savedPackage.id);
      }
    } catch (err) {
      setError("Failed to load order data");
      console.error("Data loading error:", err);
    }
  }, []);

  const handlePackageSelect = (id) => {
    const selected = packagingOptions.find(pkg => pkg.id === id);
    setSelectedPackage(id);
    localStorage.setItem("selectedPackage", JSON.stringify(selected));
  };

  const handleNext = () => {
    if (selectedPackage) {
      navigate("/person");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  // Create order summary for display
  const orderSummary = {
    serviceType: selectedService?.name || "",
    garments: garments,
    subtotal: calculateSubtotal().toFixed(2),
    total: calculateTotal()
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
          <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
          <p className="mb-4">{error}</p>
          <button
            onClick={() => setError(null)}
            className="px-4 py-2 bg-[#D4AF37] text-white rounded hover:bg-[#c9a227]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 pt-16 sm:pt-20 px-3 sm:px-4 lg:px-8 relative" 
         style={{ background: 'linear-gradient(rgb(44, 36, 22) 0%, rgb(74, 59, 42) 30%, rgb(107, 91, 71) 60%, rgb(249, 247, 244) 100%)' }}>
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Progress bar */}
              <div className="bg-gray-100 h-1.5 sm:h-2">
                <div className="bg-[#D4AF37] h-full" style={{ width: '83%' }}></div>
              </div>
              
              {/* Header */}
              <div className="p-4 sm:p-6 text-center" style={{ background: 'linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)' }}>
                <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">AKOYA PREMIUM LAUNDRY</h2>
                <p className="text-gray-300 mt-1 text-sm sm:text-base">Step 5 of 6</p>
              </div>

              {/* Package selection */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-6">
                  <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">
                    How would you like us to package your garments?
                  </h3>
                  
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
                    {packagingOptions.map(option => (
                      <div 
                        key={option.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all ${selectedPackage === option.id ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]' : 'border-gray-200'}`}
                        onClick={() => handlePackageSelect(option.id)}
                      >
                        <h4 className="font-medium text-center">{option.name}</h4>
                        <p className="text-sm text-gray-600 text-center mt-2">{option.description}</p>
                        {option.price > 0 && (
                          <p className="text-[#D4AF37] text-sm text-center mt-3">+{option.price} QAR</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation buttons */}
                <div className="mt-8 flex justify-between">
                  <button 
                    onClick={handleBack}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-medium"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!selectedPackage}
                    className={`px-6 py-3 rounded-lg font-medium ${selectedPackage ? 'bg-[#D4AF37] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order summary sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg sticky top-20 overflow-hidden">
              <div className="p-4 sm:p-6 border-b">
                <h3 className="text-lg font-bold text-center text-[#D4AF37]">Order Summary</h3>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-2">
                    <span>Service Type:</span>
                    <span>{orderSummary.serviceType}</span>
                  </div>
                  
                  <div className="border-b pb-3">
                    <p className="font-medium mb-2">Garments:</p>
                    {orderSummary.garments.map((item, index) => (
                      <div key={index} className="flex justify-between mb-2">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>{(parsePrice(item.price) * item.quantity).toFixed(2)} QAR</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between border-b pb-2">
                    <span>Subtotal:</span>
                    <span>{orderSummary.subtotal} QAR</span>
                  </div>

                  {fragrance && (
                    <div className="flex justify-between border-b pb-2">
                      <span>Fragrance:</span>
                      <span>+8.00 QAR</span>
                    </div>
                  )}
                  
                  {selectedPackage && (
                    <div className="flex justify-between border-b pb-2">
                      <span>Packaging:</span>
                      <span>+{packagingOptions.find(p => p.id === selectedPackage)?.price || 0}.00 QAR</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between font-bold text-lg pt-2">
                    <span>Total:</span>
                    <span className="text-[#D4AF37]">{orderSummary.total} QAR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;