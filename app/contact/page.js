"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <main className="w-full max-w-lg bg-[#C1D9BD] rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl font-bold text-green-900 text-center mb-6">
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-green-900">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-green-900 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-green-900">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-green-900 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium text-green-900">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-green-900 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-900"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
