"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Camera } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  flex justify-between items-center h-16 md:mr-20  lg:ml-100 md:ml-20">
        {/* Logo */}
        <div >
        <Link href="/" className="flex items-center space-x-2 text-xl font-bold flex-shrink-0">
          <span className="text-green-900">INEKAS</span>
          <Camera className="text-green-900" size={26} />
        </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">  
          <Link
            href="/"
            className="text-green-900 font-bold hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="text-green-900 font-bold hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center justify-end mr-3">
        <button
         onClick={() => setMenuOpen(!menuOpen)}
         aria-label="Toggle Menu"
         className="text-green-900 hover:text-blue-600 focus:outline-none mr-2"
        >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-100 w-full border-t border-gray-200">
          <div className="flex flex-col px-4 py-3 space-y-2">
            <Link
              href="/"
              className="text-green-900 font-bold hover:bg-gray-100 px-3 py-2 rounded transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-green-900 font-bold hover:bg-gray-100 px-3 py-2 rounded transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
