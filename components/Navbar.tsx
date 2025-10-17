'use client';
import Logo from "@/components/shared/Logo";
import { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Scrollspy
            items={['services', 'testimonials', 'contact']}
            currentClassName="text-blue-600 font-semibold underline"
            offset={-100}
            componentTag="div"
            className="flex space-x-8"
          >
            <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </Scrollspy>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow px-4 py-4">
          <Scrollspy
            items={['services', 'testimonials', 'contact']}
            currentClassName="text-blue-600 font-semibold underline"
            offset={-100}
            componentTag="div"
            className="flex flex-col space-y-4"
          >
            <a href="#services" onClick={toggleMenu}>Services</a>
            <a href="#testimonials" onClick={toggleMenu}>Testimonials</a>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </Scrollspy>
        </nav>
      )}
    </header>
  );
}
