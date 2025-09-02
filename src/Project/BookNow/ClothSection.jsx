// ClothSelection.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClothSection = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [progress] = useState(33.3333);
  const navigate = useNavigate();

  // Load selected service from localStorage or context
  const selectedService = JSON.parse(
    localStorage.getItem("selectedService")
  ) || {
    name: "Washing & Iron",
    price: "25 QAR",
  };

  const clothingCategories = {
    men: [
      "Coat",
      "Pajamas",
      "Shirt",
      "T-shirt",
      "Tie",
      "Inner",
      "Flannea",
      "Underwear",
      "Kids Jacket",
      "Kids Shirt",
      "Kids Suit",
      "Kids 3-Piece Suit",
      "Kids Pants",
      "Kids Underwear",
      "School Uniform",
      "Thawb",
      "Vest",
      "Bisht",
      "Men's Suit",
      "Ghutra",
      "Khatra",
      "Overcoat",
      "Military Uniform",
      "Kandura",
      "Trousers",
      "Thobe",
      "Socks",
      "Child Dishdasha",
      "Kameez",
      "Kurta",
      "Kurta Pyjama (Set)",
      "Gent Suit (3pcs)",
      "Dishdasha",
    ],
    women: [
      "Scarf",
      "Shawwal",
      "Silk",
      "Blouse",
      "Children's Abaya",
      "Children's Dress",
      "Kids Dress",
      "Abaya",
      "Cap",
      "Apron",
      "Long Dress",
      "Short Dress",
      "Hijab",
      "Jalabiya",
      "Abaya Special",
      "Dress",
      "Dress (Short)",
      "Dress (Long)",
      "Blouse (Special)",
      "Skirt",
      "Lingerie",
      "Bath Robe",
    ],
  };
  const priceList = {
    // Men
    Coat: 20,
    Shirt: 12,
    "T-shirt": 10,
    Pajamas: 15,
    Tie: 8,
    Underwear: 5,
    Trousers: 14,
    Kameez: 13,
    Kurta: 13,
    "Kurta Pyjama (Set)": 18,
    "Gent Suit (3pcs)": 25,
    Dishdasha: 16,

    Abaya: 18,
    Hijab: 6,
    Blouse: 12,
    Skirt: 14,
    Dress: 20,
    "Dress (Short)": 17,
    "Dress (Long)": 22,
    "Abaya Special": 25,
    Scarf: 7,
  };

  const handleItemSelect = (category, item) => {
    setSelectedItems((prev) => {
      const existingItem = prev.find(
        (i) => i.name === item && i.category === category
      );
      if (existingItem) {
        return prev.filter(
          (i) => !(i.name === item && i.category === category)
        );
      } else {
        const itemPrice = priceList[item] || 15;
        return [
          ...prev,
          { category, name: item, quantity: 1, price: itemPrice },
        ];
      }
    });
  };

  const updateQuantity = (category, item, newQuantity) => {
    setSelectedItems((prev) =>
      prev.map((i) =>
        i.name === item && i.category === category
          ? { ...i, quantity: Math.max(1, newQuantity) }
          : i
      )
    );
  };

  const handleNext = () => {
    if (selectedItems.length === 0) return;

    localStorage.setItem("selectedClothes", JSON.stringify(selectedItems));

    navigate("/steam");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const removeService = () => {
    localStorage.removeItem("selectedService");
    navigate("/");
  };

  const isItemSelected = (category, item) => {
    return selectedItems.some(
      (i) => i.name === item && i.category === category
    );
  };

  // Calculate total price (simplified example)
  const calculateTotal = () => {
    const servicePrice = selectedService
      ? parseFloat(selectedService.price)
      : 0;

    const itemsTotal = selectedItems.reduce(
      (total, item) => total + (item.price || 0) * item.quantity,
      0
    );

    const finalTotal = servicePrice + itemsTotal;

    return `${finalTotal.toFixed(2)} QAR`;
  };

  return (
    <div
      className="min-h-screen py-8 sm:py-12 pt-16 sm:pt-20 px-3 sm:px-4 lg:px-8 relative"
      style={{
        background:
          "linear-gradient(rgb(44, 36, 22) 0%, rgb(74, 59, 42) 30%, rgb(107, 91, 71) 60%, rgb(249, 247, 244) 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-[#B8941F] mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-[#F4E4B8] mix-blend-multiply filter blur-2xl animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Progress bar */}
              <div className="bg-gray-100 h-1.5 sm:h-2">
                <div
                  className="bg-[#D4AF37] h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Header */}
              <div
                className="p-4 sm:p-6 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)",
                }}
              >
                <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">
                  AKOYA PREMIUM LAUNDRY
                </h2>
                <p className="text-gray-300 mt-1 text-sm sm:text-base">
                  Step 2 of 6
                </p>
              </div>

              {/* Clothing Selection */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-6" dir="ltr">
                  <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">
                    What clothes are you sending us?
                  </h3>

                  <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                    {/* Men's Clothing */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-base sm:text-lg mb-3 text-center sm:text-left">
                        Men's
                      </h4>
                      <div className="space-y-2">
                        {clothingCategories.men.map((item) => (
                          <div
                            key={`men-${item}`}
                            className={`flex items-center w-full p-3 sm:p-4 border rounded-lg transition-all text-left ${
                              isItemSelected("men", item)
                                ? "border-[#D4AF37] bg-[#F9F7F4]"
                                : "border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                            }`}
                            onClick={() => handleItemSelect("men", item)}
                            tabIndex="0"
                          >
                            <span className="text-sm sm:text-base flex-1">
                              {item}
                            </span>
                            {isItemSelected("men", item) ? (
                              <div className="flex items-center ml-2">
                                <button
                                  className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQuantity(
                                      "men",
                                      item,
                                      selectedItems.find(
                                        (i) =>
                                          i.name === item &&
                                          i.category === "men"
                                      ).quantity - 1
                                    );
                                  }}
                                >
                                  -
                                </button>
                                <span className="mx-2 w-6 text-center">
                                  {selectedItems.find(
                                    (i) =>
                                      i.name === item && i.category === "men"
                                  )?.quantity || 1}
                                </span>
                                <button
                                  className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQuantity(
                                      "men",
                                      item,
                                      selectedItems.find(
                                        (i) =>
                                          i.name === item &&
                                          i.category === "men"
                                      ).quantity + 1
                                    );
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 ml-auto text-[#D4AF37] flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                ></path>
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Women's Clothing */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-base sm:text-lg mb-3 text-center sm:text-left">
                        Women's
                      </h4>
                      <div className="space-y-2">
                        {clothingCategories.women.map((item) => (
                          <div
                            key={`women-${item}`}
                            className={`flex items-center w-full p-3 sm:p-4 border rounded-lg transition-all text-left ${
                              isItemSelected("women", item)
                                ? "border-[#D4AF37] bg-[#F9F7F4]"
                                : "border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                            }`}
                            onClick={() => handleItemSelect("women", item)}
                            tabIndex="0"
                          >
                            <span className="text-sm sm:text-base flex-1">
                              {item}
                            </span>
                            {isItemSelected("women", item) ? (
                              <div className="flex items-center ml-2">
                                <button
                                  className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQuantity(
                                      "women",
                                      item,
                                      selectedItems.find(
                                        (i) =>
                                          i.name === item &&
                                          i.category === "women"
                                      ).quantity - 1
                                    );
                                  }}
                                >
                                  -
                                </button>
                                <span className="mx-2 w-6 text-center">
                                  {selectedItems.find(
                                    (i) =>
                                      i.name === item && i.category === "women"
                                  )?.quantity || 1}
                                </span>
                                <button
                                  className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateQuantity(
                                      "women",
                                      item,
                                      selectedItems.find(
                                        (i) =>
                                          i.name === item &&
                                          i.category === "women"
                                      ).quantity + 1
                                    );
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5 ml-auto text-[#D4AF37] flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                ></path>
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                  <button
                    type="button"
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base font-medium transition-all hover:bg-gray-50"
                    onClick={handleBack}
                    tabIndex="0"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className={`w-full sm:w-auto sm:ml-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                      selectedItems.length > 0
                        ? "bg-[#D4AF37] hover:bg-[#B8941F] text-white"
                        : "bg-gray-300 cursor-not-allowed text-gray-600"
                    }`}
                    onClick={handleNext}
                    disabled={selectedItems.length === 0}
                    tabIndex="0"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg sticky top-20 max-h-[85vh] overflow-hidden flex flex-col">
              <div
                className="p-4 sm:p-6 border-b border-gray-100 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)",
                }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#D4AF37]">
                  Order Summary
                </h3>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                {selectedService && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center pb-2">
                      <div>
                        <h4 className="font-medium text-gray-700">
                          {selectedService.name}
                        </h4>
                        <p className="text-xs text-gray-500">Service Type</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {selectedService.price}
                        </span>
                        <button
                          className="text-red-500 hover:text-red-700 p-1"
                          title="Remove"
                          onClick={removeService}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {selectedItems.length > 0 ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-700">
                        Selected Items
                      </h4>
                      <span className="text-xs text-gray-500">
                        {selectedItems.reduce(
                          (acc, item) => acc + item.quantity,
                          0
                        )}{" "}
                        items
                      </span>
                    </div>

                    <div className="divide-y divide-gray-100">
                      {selectedItems.map((item, index) => (
                        <div
                          key={index}
                          className="py-3 flex justify-between items-center"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#F9F7F4] flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-[#D4AF37]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                ></path>
                              </svg>
                            </div>
                            <div>
                              <p className="text-sm font-medium">{item.name}</p>
                              <p className="text-xs text-gray-500 capitalize">
                                {item.category}'s
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                              x{item.quantity}
                            </span>
                            <button
                              className="text-red-500 hover:text-red-700 p-1"
                              title="Remove"
                              onClick={() =>
                                handleItemSelect(item.category, item.name)
                              }
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <svg
                      className="w-12 h-12 text-gray-300 mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      ></path>
                    </svg>
                    <p className="text-gray-500 text-sm">
                      No items selected yet
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Select items from the list
                    </p>
                  </div>
                )}
              </div>

              {/* Subtotal & Total Only */}
              <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">{calculateTotal()}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
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
      </div>
    </div>
  );
};

export default ClothSection;
