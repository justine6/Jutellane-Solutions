'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const sections = ['services', 'testimonials', 'contact'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* Top nav bar */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-gray-800">
          Jutellane Solutions
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm sm:text-base">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`hover:text-blue-600 ${
                  activeSection === id ? 'text-blue-600 font-semibold underline' : ''
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-60 opacity-100 py-2 px-4' : 'max-h-0 opacity-0 px-4'
        } bg-white`}
      >
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleLinkClick}
            className="block py-2 text-gray-700 hover:text-blue-600 text-sm"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </header>
  );
}
