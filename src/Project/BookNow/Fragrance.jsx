import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Define fragrances data
const fragrances = {
  women: [
    { name: "Chanel No. 5", price: 8 },
    { name: "Dior J'adore", price: 8 },
    { name: "Marc Jacobs Daisy", price: 8 },
  ],
  men: [
    { name: "Dior Sauvage", price: 8 },
    { name: "Chanel Bleu", price: 8 },
    { name: "Creed Aventus", price: 8 },
  ]
};

const Fragrance = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedClothes, setSelectedClothes] = useState([]);
  const [steamSelected, setSteamSelected] = useState(false);
  const [incenseSelected, setIncenseSelected] = useState(false);
  const [selectedFragrance, setSelectedFragrance] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const service = JSON.parse(localStorage.getItem("selectedService"));
    const clothes = JSON.parse(localStorage.getItem("selectedClothes")) || [];
    const addons = JSON.parse(localStorage.getItem("additionalServices"));

    setSelectedService(service);
    setSelectedClothes(clothes);

    if (addons) {
      setSteamSelected(addons.steamService || false);
      setIncenseSelected(addons.incenseService || false);
      setSelectedFragrance(addons.fragrance || null);
    }
  }, []);

  const handleFragranceSelect = (fragrance) => {
    setSelectedFragrance(fragrance.name);
    localStorage.setItem("selectedFragrance", JSON.stringify(fragrance));
  };

  const handleRemoveFragrance = () => {
    setSelectedFragrance(null);
    localStorage.removeItem("selectedFragrance");
  };

  const removeService = () => {
    try {
      localStorage.removeItem("selectedService");
      setSelectedService(null);
      navigate("/");
    } catch (err) {
      setError("Failed to remove service. Please try again.");
      console.error("Remove service error:", err);
    }
  };

  const removeClothingItem = (itemName) => {
    try {
      const updatedClothes = selectedClothes.filter((item) => item.name !== itemName);
      setSelectedClothes(updatedClothes);
      localStorage.setItem("selectedClothes", JSON.stringify(updatedClothes));
    } catch (err) {
      setError("Failed to remove item. Please try again.");
      console.error("Remove item error:", err);
    }
  };

  const updateQuantity = (itemName, delta) => {
    try {
      const updatedClothes = selectedClothes.map((item) =>
        item.name === itemName
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );
      setSelectedClothes(updatedClothes);
      localStorage.setItem("selectedClothes", JSON.stringify(updatedClothes));
    } catch (err) {
      setError("Failed to update quantity. Please try again.");
      console.error("Update quantity error:", err);
    }
  };

  const calculateSubtotal = () => {
    let subtotal = 0;

    if (selectedService?.price) {
      const servicePrice = typeof selectedService.price === "string"
        ? parseFloat(selectedService.price.replace(/[^\d.-]/g, "")) || 0
        : parseFloat(selectedService.price) || 0;
      subtotal += servicePrice;
    }

    // Clothes
    selectedClothes.forEach((item) => {
      if (item?.price) {
        const itemPrice = typeof item.price === "string"
          ? parseFloat(item.price.replace(/[^\d.-]/g, "")) || 0
          : parseFloat(item.price) || 0;
        subtotal += (item.quantity || 1) * itemPrice;
      }
    });

    return subtotal;
  };

  const calculateTotal = () => {
    try {
      let total = calculateSubtotal();

      if (steamSelected) total += 5;
      if (incenseSelected) total += 3;
      if (selectedFragrance) total += 8;

      return isNaN(total) ? "0.00 QAR" : `${total.toFixed(2)} QAR`;
    } catch (err) {
      console.error("Calculation error:", err);
      return "0.00 QAR";
    }
  };

  const handleNext = () => {
    try {
      const selections = {
        steamService: steamSelected,
        incenseService: incenseSelected,
        fragrance: selectedFragrance,
      };

      const orderSummary = {
        serviceType: selectedService?.name || "",
        garments: selectedClothes,
        subtotal: `${calculateSubtotal().toFixed(2)} QAR`,
        total: calculateTotal(),
      };

      localStorage.setItem("additionalServices", JSON.stringify(selections));
      localStorage.setItem("orderSummary", JSON.stringify(orderSummary));

      navigate("/pak");
    } catch (err) {
      setError("Failed to save selections. Please try again.");
      console.error("Save error:", err);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleRemoveGarment = (index) => {
    const item = selectedClothes[index];
    if (item) {
      removeClothingItem(item.name);
    }
  };

  const handleGarmentQuantity = (index, delta) => {
    const item = selectedClothes[index];
    if (item) {
      updateQuantity(item.name, delta);
    }
  };

  // Create order summary for rendering
  const orderSummary = {
    serviceType: selectedService?.name || "",
    garments: selectedClothes,
    subtotal: `${calculateSubtotal().toFixed(2)} QAR`,
    total: calculateTotal(),
  };

  if (error) {
    return (
      <div className="min-h-screen py-8 sm:py-12 pt-16 sm:pt-20 px-3 sm:px-4 lg:px-8 relative" 
           style={{ background: 'linear-gradient(rgb(44, 36, 22) 0%, rgb(74, 59, 42) 30%, rgb(107, 91, 71) 60%, rgb(249, 247, 244) 100%)' }}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-bold text-red-600 mb-4">Error</h2>
            <p className="text-gray-700 mb-6">{error}</p>
            <button
              onClick={() => setError(null)}
              className="px-4 py-2 bg-[#D4AF37] text-white rounded-lg hover:bg-[#c9a227] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 pt-16 sm:pt-20 px-3 sm:px-4 lg:px-8 relative" 
         style={{ background: 'linear-gradient(rgb(44, 36, 22) 0%, rgb(74, 59, 42) 30%, rgb(107, 91, 71) 60%, rgb(249, 247, 244) 100%)' }}>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-[#B8941F] mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-[#F4E4B8] mix-blend-multiply filter blur-2xl animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 h-1.5 sm:h-2">
                <div className="bg-[#D4AF37] h-full transition-all duration-300" style={{ width: '66.6667%' }}></div>
              </div>

              <div className="p-4 sm:p-6 text-center" style={{ background: 'linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)' }}>
                <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">AKOYA PREMIUM LAUNDRY</h2>
                <p className="text-gray-300 mt-1 text-sm sm:text-base">Step 4 of 6</p>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-6">
                  <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">
                    Would you like us to perfume your clothes with a luxury scent?
                  </h3>

                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                    <div className="space-y-3">
                      <h4 className="font-medium text-base sm:text-lg mb-3 text-center sm:text-left">Women's</h4>
                      <div className="space-y-2">
                        {fragrances.women.map((fragrance) => (
                          <button
                            key={fragrance.name}
                            type="button"
                            className={`w-full p-3 sm:p-4 border rounded-lg transition-all text-sm sm:text-base text-left ${
                              selectedFragrance === fragrance.name
                                ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                                : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                            }`}
                            onClick={() => handleFragranceSelect(fragrance)}
                          >
                            <span className="block">{fragrance.name}</span>
                            <span className="text-xs text-gray-500">+{fragrance.price} QAR</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-base sm:text-lg mb-3 text-center sm:text-left">Men's</h4>
                      <div className="space-y-2">
                        {fragrances.men.map((fragrance) => (
                          <button
                            key={fragrance.name}
                            type="button"
                            className={`w-full p-3 sm:p-4 border rounded-lg transition-all text-sm sm:text-base text-left ${
                              selectedFragrance === fragrance.name
                                ? 'border-[#D4AF37] bg-[#FFF9E6] shadow-md'
                                : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                            }`}
                            onClick={() => handleFragranceSelect(fragrance)}
                          >
                            <span className="block">{fragrance.name}</span>
                            <span className="text-xs text-gray-500">+{fragrance.price} QAR</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                  <button
                    type="button"
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base font-medium transition-all"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="w-full sm:w-auto sm:ml-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all bg-[#D4AF37] text-white hover:bg-[#c9a227]"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg sticky top-20 max-h-[85vh] overflow-hidden flex flex-col">
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-center text-[#D4AF37]">Order Summary</h3>
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-sm font-medium">Service Type:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{orderSummary.serviceType}</span>
                      <button 
                        className="text-red-500 hover:text-red-700 p-1" 
                        title="Remove"
                        onClick={removeService}
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="border-b pb-3">
                    <p className="font-medium mb-2 text-sm">Garments:</p>
                    <div className="space-y-2">
                      {orderSummary.garments.map((garment, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-2">
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-medium truncate pr-2 flex-1">{garment.name}</span>
                            <button 
                              className="text-red-500 hover:text-red-700 p-1 flex-shrink-0" 
                              title="Remove"
                              onClick={() => handleRemoveGarment(index)}
                            >
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </button>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <button 
                                className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded text-xs font-bold transition-colors" 
                                onClick={() => handleGarmentQuantity(index, -1)}
                              >
                                -
                              </button>
                              <span className="text-xs font-medium min-w-[20px] text-center">{garment.quantity}</span>
                              <button 
                                className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded text-xs font-bold transition-colors"
                                onClick={() => handleGarmentQuantity(index, 1)}
                              >
                                +
                              </button>
                            </div>
                            <span className="text-xs font-medium">{garment.price * garment.quantity} QAR</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedFragrance && (
                    <div className="border-b pb-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Fragrance:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">+8 QAR</span>
                          <button 
                            className="text-red-500 hover:text-red-700 p-1" 
                            title="Remove"
                            onClick={handleRemoveFragrance}
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">{selectedFragrance}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">{orderSummary.subtotal}</span>
                  </div>
                  {selectedFragrance && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Fragrance:</span>
                      <span className="font-medium">+8 QAR</span>
                    </div>
                  )}
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-gray-700">Total:</span>
                    <span className="text-[#D4AF37]">{orderSummary.total}</span>
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

export default Fragrance;
