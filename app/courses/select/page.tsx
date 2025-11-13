"use client";

import { useState } from "react";
import Link from "next/link";

export default function CourseSelectPage() {
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const [selectedClasses, setSelectedClasses] = useState(0);
  const [addOns, setAddOns] = useState({
    website: false,
    advertisingManagement: false,
    extraCheckup: false,
    prioritySupport: false,
  });

  const baseCourse = {
    name: "Custom Course Package",
    price: 499,
    includes: [
      "1 Vendor of your choice",
      "1 call to decide vendor order choice",
      "2 classes a week",
      "1 checkup at the end of the week",
    ],
  };

  const vendors = [
    { id: "technology", name: "Technology Vendor", price: 25 },
    { id: "chrome-hearts", name: "Chrome Hearts Glasses Vendor", price: 30 },
    { id: "shoes", name: "Shoes Vendor", price: 50 },
    { id: "clothes", name: "Clothes Vendor", price: 35 },
    { id: "watch", name: "Watch Vendor", price: 45 },
    { id: "cologne", name: "Cologne Vendor", price: 40 },
  ];

  const classPackages = [
    { count: 1, price: 85, label: "+1 Class per week" },
    { count: 2, price: 120, label: "+2 Classes per week" },
  ];

  const additionalAddOns = [
    { id: "website", name: "Custom Website", price: 200, description: "Professional website built by our team" },
    { id: "advertisingManagement", name: "Advertising Management", price: 150, description: "We manage your ads and campaigns" },
    { id: "extraCheckup", name: "Extra Weekly Checkup", price: 75, description: "Additional weekly progress review" },
    { id: "prioritySupport", name: "Priority Support", price: 100, description: "24/7 priority customer support" },
  ];

  const toggleVendor = (vendorId: string) => {
    setSelectedVendors((prev) => {
      if (prev.includes(vendorId)) {
        return prev.filter((id) => id !== vendorId);
      } else {
        return [...prev, vendorId];
      }
    });
  };

  const toggleAddOn = (addOnId: keyof typeof addOns) => {
    setAddOns((prev) => ({
      ...prev,
      [addOnId]: !prev[addOnId],
    }));
  };

  const calculateTotal = () => {
    let total = baseCourse.price;

    // Add vendor costs (first vendor is included, only charge for additional ones)
    if (selectedVendors.length > 1) {
      selectedVendors.slice(1).forEach((vendorId) => {
        const vendor = vendors.find((v) => v.id === vendorId);
        if (vendor) total += vendor.price;
      });
    }

    // Add class package cost
    if (selectedClasses > 0) {
      const classPackage = classPackages.find((p) => p.count === selectedClasses);
      if (classPackage) total += classPackage.price;
    }

    // Add other add-ons
    additionalAddOns.forEach((addOn) => {
      if (addOns[addOn.id as keyof typeof addOns]) {
        total += addOn.price;
      }
    });

    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Link href="/" className="inline-block mb-6 text-purple-400 hover:text-purple-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
            Customize Your Course
          </h1>
          <p className="text-xl text-gray-300">
            Build your perfect learning experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Customization Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Base Course */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Base Course - ${baseCourse.price}</h2>
              <p className="text-gray-400 mb-6">Your base package includes:</p>
              <ul className="space-y-2 text-gray-300">
                {baseCourse.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add More Vendors */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Choose Your Vendors</h2>
              <p className="text-gray-400 mb-6">
                Your base course includes 1 vendor (first one is free). Select additional vendors below ({selectedVendors.length} selected)
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {vendors.map((vendor) => {
                  const isSelected = selectedVendors.includes(vendor.id);

                  return (
                    <button
                      key={vendor.id}
                      onClick={() => toggleVendor(vendor.id)}
                      className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                        isSelected
                          ? "bg-purple-900/30 border-purple-500"
                          : "bg-slate-800 border-slate-600 hover:border-purple-500"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <div className="mt-1">
                            {isSelected ? (
                              <div className="w-5 h-5 rounded bg-purple-600 flex items-center justify-center">
                                <span className="text-white text-xs">✓</span>
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded border-2 border-slate-600"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-white font-semibold">{vendor.name}</h3>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-purple-400 ml-2">+${vendor.price}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add More Classes */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Add More Classes</h2>
              <p className="text-gray-400 mb-6">
                Your base course includes 2 classes per week. Upgrade to get more:
              </p>

              <div className="space-y-4">
                {classPackages.map((pkg) => (
                  <button
                    key={pkg.count}
                    onClick={() => setSelectedClasses(selectedClasses === pkg.count ? 0 : pkg.count)}
                    className={`w-full p-6 rounded-xl border transition-all duration-300 text-left ${
                      selectedClasses === pkg.count
                        ? "bg-purple-900/30 border-purple-500"
                        : "bg-slate-800 border-slate-600 hover:border-purple-500"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          selectedClasses === pkg.count ? 'border-purple-500 bg-purple-500' : 'border-slate-600'
                        }">
                          {selectedClasses === pkg.count && (
                            <span className="text-white text-xs">✓</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{pkg.label}</h3>
                          <p className="text-gray-400 text-sm">Total: {2 + pkg.count} classes per week</p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-purple-400">+${pkg.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Add-ons */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Additional Features</h2>

              <div className="space-y-4">
                {additionalAddOns.map((addOn) => (
                  <div
                    key={addOn.id}
                    className={`p-6 rounded-xl border transition-all duration-300 ${
                      addOns[addOn.id as keyof typeof addOns]
                        ? "bg-purple-900/30 border-purple-500"
                        : "bg-slate-800 border-slate-600 hover:border-purple-500"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <input
                            type="checkbox"
                            checked={addOns[addOn.id as keyof typeof addOns]}
                            onChange={() => toggleAddOn(addOn.id as keyof typeof addOns)}
                            className="w-5 h-5 rounded border-gray-600 text-purple-600 focus:ring-purple-500 focus:ring-offset-slate-900"
                          />
                          <h3 className="text-xl font-bold text-white">{addOn.name}</h3>
                        </div>
                        <p className="text-gray-400 text-sm ml-8">{addOn.description}</p>
                      </div>
                      <div className="text-2xl font-bold text-purple-400 ml-4">
                        +${addOn.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-purple-900 to-slate-900 border-2 border-purple-500 rounded-2xl p-8 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>{baseCourse.name}</span>
                  <span className="font-semibold">${baseCourse.price}</span>
                </div>

                {selectedVendors.length > 0 && (
                  <div className="border-t border-purple-500/20 pt-4">
                    <p className="text-sm font-semibold text-purple-300 mb-2">Selected Vendors:</p>
                    {selectedVendors.map((vendorId, index) => {
                      const vendor = vendors.find((v) => v.id === vendorId);
                      if (!vendor) return null;
                      const isIncluded = index === 0;
                      return (
                        <div key={vendorId} className="flex justify-between text-gray-300 text-sm mb-1">
                          <span>{vendor.name}</span>
                          {isIncluded ? (
                            <span className="text-green-400 font-semibold">Included</span>
                          ) : (
                            <span className="font-semibold">+${vendor.price}</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {selectedClasses > 0 && (
                  <div className="border-t border-purple-500/20 pt-4">
                    <div className="flex justify-between text-gray-300">
                      <span>+{selectedClasses} Class{selectedClasses > 1 ? 'es' : ''} per week</span>
                      <span className="font-semibold">+${classPackages.find(p => p.count === selectedClasses)?.price}</span>
                    </div>
                  </div>
                )}

                {(addOns.website || addOns.advertisingManagement || addOns.extraCheckup || addOns.prioritySupport) && (
                  <div className="border-t border-purple-500/20 pt-4">
                    <p className="text-sm font-semibold text-purple-300 mb-2">Additional Features:</p>
                    {additionalAddOns.map((addOn) => {
                      if (!addOns[addOn.id as keyof typeof addOns]) return null;
                      return (
                        <div key={addOn.id} className="flex justify-between text-gray-300 text-sm mb-1">
                          <span>{addOn.name}</span>
                          <span className="font-semibold">+${addOn.price}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="border-t-2 border-purple-500/50 pt-6 mt-6">
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-white">Total</p>
                    <p className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                      ${calculateTotal()}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href={`/courses/checkout?vendors=${selectedVendors.join(',')}&classes=${selectedClasses}&website=${addOns.website}&advertisingManagement=${addOns.advertisingManagement}&extraCheckup=${addOns.extraCheckup}&prioritySupport=${addOns.prioritySupport}`}
                className="block w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 text-center"
              >
                Proceed to Checkout
              </Link>

              <p className="text-center text-gray-400 text-xs mt-4">
                Secure payment • Money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
