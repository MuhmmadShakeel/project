import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Personalized = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ from: "", to: "" });
  const [errors, setErrors] = useState({ from: false });
  const [order, setOrder] = useState({
    serviceType: { name: "", price: 0 },
    garments: [],
    fragrance: null,
    packaging: null,
  });
  const [error, setError] = useState(null);

  // Packaging options
  const packagingOptions = [
    {
      id: 1,
      name: "Plastic Wrap",
      description: "Clean transparent protection",
      price: 0,
    },
    {
      id: 2,
      name: "Luxury Fabric Wrap",
      description: "Soft-touch premium wrapping",
      price: 15,
    },
    {
      id: 3,
      name: "Premium Gift Box",
      description: "Elegant box with magnetic closure",
      price: 30,
    },
  ];

  useEffect(() => {
    try {
      const service = JSON.parse(localStorage.getItem("selectedService")) || {
        name: "",
        price: 0,
      };
      const clothes = JSON.parse(localStorage.getItem("selectedClothes")) || [];
      const fragrance =
        JSON.parse(localStorage.getItem("selectedFragrance")) || null;
      const packaging =
        JSON.parse(localStorage.getItem("selectedPackage")) || null;

      setOrder({
        serviceType: service,
        garments: clothes,
        fragrance: fragrance
          ? { ...fragrance, selected: true }
          : { selected: false },
        packaging: packaging
          ? {
              ...packaging,
              selected: true,
              description:
                packagingOptions.find((p) => p.id === packaging.id)
                  ?.description || "",
            }
          : { selected: false },
      });
    } catch (err) {
      console.error("Failed to load order details:", err);
      setError("Failed to load your order details. Please try again.");
    }
  }, []);

  // Helper function to parse prices
  const parsePrice = (price) => {
    if (typeof price === "string") {
      return parseFloat(price.replace(/[^\d.-]/g, "")) || 0;
    }
    return Number(price) || 0;
  };

  // Calculate service price
  const getServicePrice = () => {
    return order.serviceType?.price ? parsePrice(order.serviceType.price) : 0;
  };

  // Calculate garments total
  const calculateGarmentsTotal = () => {
    return order.garments.reduce((total, item) => {
      const price = parsePrice(item.price);
      const quantity = Math.max(1, Number(item.quantity) || 1);
      return total + price * quantity;
    }, 0);
  };

  // Calculate subtotal (service + garments)
  const calculateSubtotal = () => {
    return getServicePrice() + calculateGarmentsTotal();
  };

  // Calculate total (subtotal + fragrance + packaging)
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const fragrancePrice = order.fragrance?.selected
      ? parsePrice(order.fragrance.price || 0)
      : 0;
    const packagingPrice = order.packaging?.selected
      ? parsePrice(order.packaging.price || 0)
      : 0;

    return (subtotal + fragrancePrice + packagingPrice).toFixed(2);
  };

  const subtotal = calculateSubtotal().toFixed(2);
  const total = calculateTotal();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "from" && value.trim()) {
      setErrors((prev) => ({ ...prev, from: false }));
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.from.trim()) {
      setErrors({ from: true });
      return;
    }

    try {
      localStorage.setItem("cardMessage", JSON.stringify(formData));
      navigate("/confirmation");
    } catch (err) {
      console.error("Failed to save card message:", err);
      setError("Failed to save your message. Please try again.");
    }
  };

  const handleRemoveItem = (name) => {
    const updated = order.garments.filter((item) => item.name !== name);
    setOrder((prev) => ({ ...prev, garments: updated }));
    localStorage.setItem("selectedClothes", JSON.stringify(updated));
  };

  const handleQuantityChange = (name, delta) => {
    const updated = order.garments.map((item) =>
      item.name === name
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setOrder((prev) => ({ ...prev, garments: updated }));
    localStorage.setItem("selectedClothes", JSON.stringify(updated));
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
    <div
      className="min-h-screen py-8 sm:py-12 pt-16 sm:pt-20 px-3 sm:px-4 lg:px-8 relative"
      style={{
        background:
          "linear-gradient(rgb(44, 36, 22) 0%, rgb(74, 59, 42) 30%, rgb(107, 91, 71) 60%, rgb(249, 247, 244) 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 h-1.5 sm:h-2">
                <div
                  className="bg-[#D4AF37] h-full transition-all duration-300"
                  style={{ width: "100%" }}
                ></div>
              </div>

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
                  Step 6 of 6
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-6" dir="ltr">
                  <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">
                    Want to include a personalized card?
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm sm:text-base font-medium">
                        From <span className="text-red-500">*</span>
                      </label>
                      <input
                        name="from"
                        placeholder="Your name (required)*"
                        className={`w-full p-3 sm:p-4 border rounded-lg text-sm sm:text-base transition-all ${
                          errors.from
                            ? "border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-gray-300 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                        }`}
                        value={formData.from}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.from && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">
                          This field is required
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm sm:text-base font-medium">
                        To (optional)
                      </label>
                      <input
                        name="to"
                        placeholder="Recipient's name (optional)"
                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] text-sm sm:text-base transition-all"
                        value={formData.to}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 border border-gray-300 rounded-lg text-sm sm:text-base font-medium transition-all hover:bg-gray-50"
                  >
                    Back
                  </button>
                 
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg sticky top-20 max-h-[85vh] overflow-hidden flex flex-col">
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-center text-[#D4AF37]">
                  Order Summary
                </h3>
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-sm font-medium">Service Type:</span>
                    <span className="text-sm">{order.serviceType.name}</span>
                  </div>

                  <div className="border-b pb-3">
                    <p className="font-medium mb-2 text-sm">Garments:</p>
                    <div className="space-y-2">
                      {order.garments.map((item) => (
                        <div
                          key={item.name}
                          className="bg-gray-50 rounded-lg p-2"
                        >
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-medium truncate pr-2 flex-1">
                              {item.name}
                            </span>
                            <button
                              onClick={() => handleRemoveItem(item.name)}
                              className="text-red-500 hover:text-red-700 p-1 flex-shrink-0"
                              title="Remove"
                            >
                              <svg
                                className="w-3 h-3"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.name, -1)
                                }
                                className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded text-xs font-bold"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="text-xs font-medium min-w-[20px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(item.name, 1)
                                }
                                className="w-6 h-6 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded text-xs font-bold"
                              >
                                +
                              </button>
                            </div>
                            <span className="text-xs font-medium">
                              {(parsePrice(item.price) * item.quantity).toFixed(
                                2
                              )}{" "}
                              QAR
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {order.fragrance?.selected && (
                    <div className="border-b pb-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Fragrance:</span>
                        <span className="text-sm font-medium">
                          +{parsePrice(order.fragrance.price).toFixed(2)} QAR
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {order.fragrance.name}
                      </div>
                    </div>
                  )}

                  {order.packaging?.selected && (
                    <div className="border-b pb-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Packaging:</span>
                        <span className="text-sm font-medium">
                          +{parsePrice(order.packaging.price).toFixed(2)} QAR
                        </span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {order.packaging.name}
                        {order.packaging.description && (
                          <p className="text-gray-500">
                            {order.packaging.description}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Subtotal Section */}
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between font-medium">
                      <span className="text-sm">Subtotal:</span>
                      <span className="text-sm">{subtotal} QAR</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span className="text-gray-700">Total:</span>
                  <span className="text-[#D4AF37]">{total} QAR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personalized;
