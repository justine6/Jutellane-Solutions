'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const sections = ['services', 'testimonials', 'contact'];

export default function Navbar() {
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
      {
        threshold: 0.6,
      }
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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-lg">
          Jutellane Solutions
        </Link>
        <ul className="flex gap-6 text-sm sm:text-base">
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
      </nav>
    </header>
  );
}
