'use client';

import { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
        <Link href="/" className="font-bold text-xl">
          Jutellane Solutions
        </Link>

        {/* Hamburger Button */}
        <button onClick={toggleMenu} className="sm:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Scrollspy Navigation */}
        <nav className={`sm:flex ${isOpen ? 'block' : 'hidden'} mt-3 sm:mt-0`}>
          <Scrollspy
            items={['services', 'testimonials', 'contact']}
            currentClassName="text-blue-600 font-semibold"
            offset={-100}
            className="flex flex-col sm:flex-row gap-4 text-gray-800"
          >
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </Scrollspy>
        </nav>
      </div>
    </header>
  );
}
