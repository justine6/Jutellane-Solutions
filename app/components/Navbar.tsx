'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 h-1 bg-blue-600 z-50" style={{ width: `${scrollProgress}%` }} />

      {/* Navbar */}
      <nav className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Jutellane Solutions
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-700 text-sm">
            <Link href="#services" className="hover:text-blue-600">Services</Link>
            <Link href="#testimonials" className="hover:text-blue-600">Testimonials</Link>
            <Link href="#contact" className="hover:text-blue-600">Contact</Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3 text-sm text-gray-700">
            <Link href="#services" onClick={toggleMenu} className="block hover:text-blue-600">Services</Link>
            <Link href="#testimonials" onClick={toggleMenu} className="block hover:text-blue-600">Testimonials</Link>
            <Link href="#contact" onClick={toggleMenu} className="block hover:text-blue-600">Contact</Link>
          </div>
        )}
      </nav>
    </>
  );
}
