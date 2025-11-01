"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Home() {
  const [images, setImages] = useState([]);
  const [size, setSize] = useState("");

  const sizes = [
    { label: "4×6", price: 1.5 },
    { label: "5×7", price: 3 },
    { label: "8×10", price: 5 },
  ];

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 5) {
      alert("You can upload up to 5 photos only.");
      return;
    }
    setImages((prev) => [...prev, ...files]);
  };

  const handleRemove = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const getTotal = () => {
    if (!size) return 0;
    const selected = sizes.find((s) => s.label === size);
    return selected ? selected.price * images.length : 0;
  };

  const handlePay = async () => {
    if (images.length === 0) {
      alert("Please upload at least one photo.");
      return;
    }
    if (!size) {
      alert("Please select a print size.");
      return;
    }

    const stripe = await stripePromise;

  
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [
          {
            name: `${images.length} photo(s) - ${size}`,
            price: getTotal(),
            quantity: 1,
          },
        ],
      }),
    });

    const data = await response.json();

    // Redirect to Stripe Checkout
    window.location.href = data.url;
  };

  return (
    <div className="relative">
  <Image
    src="/images/studio.png"
    alt="Decor"
    width={800}
    height={200}
    className="absolute -top-1 right-1 opacity-20 lg:opacity-50 lg:right-15 md:opacity-40 rotate-12 pointer-events-none"
  />
<main className="max-w-lg bg-[#C1D9BD] md:max-w-2xl lg:max-w-3xl mx-auto p-6 md:p-9 shadow-lg rounded-2xl mt-36 md:mt-40 lg:mt-30 space-y-6 w-[90%] form-container">
  <h1 className="text-3xl font-bold text-center text-green-900">
    Pixel to Paper
  </h1>

  {/* Upload Section */}
  <div>
    <label className="block mb-2 font-bold text-green-900">
      Upload Photos (max 5)
    </label>
    <input
      type="file"
      accept="image/*"
      multiple
      onChange={handleUpload}
      className="block w-full border border-green-900 text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer p-2"
    />
  </div>

  {/* Thumbnails */}
  {images.length > 0 && (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {images.map((img, i) => (
        <div key={i} className="relative">
          <img
            src={URL.createObjectURL(img)}
            alt={`upload-${i}`}
            className="rounded-lg object-contain w-full h-28 sm:h-32"
          />
          <button
            onClick={() => handleRemove(i)}
            className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded-full px-1.5"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )}

  {/* Dropdown */}
  <div>
    <label className="block mb-2 font-bold text-green-900">
      Select Print Size
    </label>
    <select
      value={size}
      onChange={(e) => setSize(e.target.value)}
      className="w-full border text-green-900 border-gray-300 rounded-lg p-2 border border-green-900 "
    >
      <option value="">Choose size</option>
      {sizes.map((s) => (
        <option key={s.label} value={s.label}>
          {s.label} – AED {s.price}
        </option>
      ))}
    </select>
  </div>

  {/* Price Display */}
  <div className="text-center">
    <p className="text-lg font-semibold text-gray-700">
      Total: AED {getTotal().toFixed(2)}
    </p>
  </div>

  {/* Pay Now Button */}
  <div className="text-center">
    <button
      onClick={handlePay}
      className="bg-green-900 text-primary px-6 py-2 rounded-lg hover:bg-green-400 transition"
    >
      Pay Now
    </button>
  </div>
</main>
</div>

  );
}
