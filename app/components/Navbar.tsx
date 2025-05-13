'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-700">
          Jutellane Solutions
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <li>
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-2 space-y-2">
          <a href="#services" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#testimonials" className="block text-gray-700 hover:text-blue-600">Testimonials</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </header>
  );
}
