"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRef } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course") as "grey" | "blue" | "gold" | null;
  const vendorsParam = searchParams.get("vendors");
  const extraVendorParam = searchParams.get("extraVendor") === "true";
  const websiteParam = searchParams.get("website") === "true";
  const summaryRef = useRef<HTMLDivElement>(null);

  const selectedVendors = vendorsParam ? vendorsParam.split(",").filter(Boolean) : [];

  const downloadAsImage = async () => {
    if (!summaryRef.current) return;

    try {
      // Dynamically import html2canvas
      const html2canvas = (await import('html2canvas')).default;

      const canvas = await html2canvas(summaryRef.current, {
        backgroundColor: '#1e1b4b',
        scale: 2,
        logging: false, // Disable logging to avoid console warnings
        useCORS: true,
      });

      const link = document.createElement('a');
      link.download = `order-summary-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Failed to download image:', error);
      alert('Failed to download image. Please take a screenshot instead.');
    }
  };

  const vendors = [
    { id: "technology", name: "Technology Vendor", price: 0 },
    { id: "chrome-hearts", name: "Chrome Hearts Glasses Vendor", price: 0 },
    { id: "shoes", name: "Shoes Vendor", price: 50 },
    { id: "clothes", name: "Clothes Vendor", price: 0 },
    { id: "watch", name: "Watch Vendor", price: 50 },
    { id: "cologne", name: "Cologne Vendor", price: 0 },
  ];

  const courses = {
    grey: {
      name: "Course Grey",
      price: 499,
    },
    blue: {
      name: "Course Blue",
      price: 799,
    },
    gold: {
      name: "Course Gold",
      price: 1099,
    },
  };

  const selectedCourse = courseParam || "blue";

  const calculateTotal = () => {
    let total = courses[selectedCourse].price;

    selectedVendors.forEach((vendorId) => {
      const vendor = vendors.find((v) => v.id === vendorId);
      if (vendor) total += vendor.price;
    });

    if (extraVendorParam) total += 85;
    if (websiteParam) total += 150;
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/courses/select" className="inline-block mb-6 text-purple-400 hover:text-purple-300 transition-colors">
            ← Back to Customize
          </Link>
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
            Your Order
          </h1>
          <p className="text-xl text-gray-300">
            Review your order details below
          </p>
        </div>

        {/* Order Summary Card */}
        <div ref={summaryRef} id="order-summary" className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl">
          <div className="flex justify-between items-start mb-8 pb-4 border-b border-purple-500/30">
            <h2 className="text-3xl font-bold text-white">
              Order Summary
            </h2>
            <button
              onClick={downloadAsImage}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Image
            </button>
          </div>

          <div className="space-y-4 mb-8">
            {/* Course */}
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="text-white font-semibold text-lg">{courses[selectedCourse].name}</p>
                <p className="text-gray-400 text-sm">Base Course Package</p>
              </div>
              <p className="text-white font-bold text-xl">${courses[selectedCourse].price}</p>
            </div>

            {/* Vendors */}
            {selectedVendors.length > 0 && (
              <div className="border-t border-purple-500/20 pt-4">
                <p className="text-purple-300 font-semibold mb-3">Selected Vendors:</p>
                {selectedVendors.map((vendorId) => {
                  const vendor = vendors.find((v) => v.id === vendorId);
                  if (!vendor) return null;
                  return (
                    <div key={vendorId} className="flex justify-between items-center py-2 ml-4">
                      <p className="text-gray-300">{vendor.name}</p>
                      {vendor.price > 0 ? (
                        <p className="text-white font-semibold">+${vendor.price}</p>
                      ) : (
                        <p className="text-gray-500 text-sm">Included</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Add-ons */}
            {(extraVendorParam || websiteParam) && (
              <div className="border-t border-purple-500/20 pt-4">
                <p className="text-purple-300 font-semibold mb-3">Add-ons:</p>
                {extraVendorParam && (
                  <div className="flex justify-between items-center py-2 ml-4">
                    <p className="text-gray-300">Extra Vendor</p>
                    <p className="text-white font-semibold">+$85</p>
                  </div>
                )}
                {websiteParam && (
                  <div className="flex justify-between items-center py-2 ml-4">
                    <p className="text-gray-300">Custom Website</p>
                    <p className="text-white font-semibold">+$150</p>
                  </div>
                )}
              </div>
            )}

            {/* Total */}
            <div className="border-t-2 border-purple-500/50 pt-6 mt-6">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-white">Total</p>
                <p className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                  ${calculateTotal()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-br from-purple-900/50 to-slate-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How to Complete Your Order
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">1</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Take a Screenshot</h3>
                <p className="text-gray-300 leading-relaxed">
                  Screenshot your order summary above with all your selected items and total price
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">2</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-3">Send It to Our Snapchat</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Click the button below to add us on Snapchat and send your screenshot
                </p>

                <a
                  href="https://snapchat.com/t/hZKQOsJI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#FFFC00] hover:bg-[#FFFC00]/90 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  💬 Open Snapchat
                </a>

                <div className="mt-4">
                  <p className="text-gray-400 text-sm">Username: <span className="text-purple-300 font-semibold">@leight0nr0ze</span></p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">3</span>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold text-white mb-2">Get Your Payment Details</h3>
                <p className="text-gray-300 leading-relaxed">
                  We'll message you back with payment instructions and course access info within 24 hours
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center pt-6 border-t border-purple-500/20">
            <p className="text-gray-400">
              💬 Questions? Message us on Snapchat anytime!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
