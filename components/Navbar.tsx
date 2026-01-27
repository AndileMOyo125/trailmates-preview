
import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Weekly Walks', href: '#walks' },
    { name: 'Hikes', href: '#hikes' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-emerald-800 font-serif">TRAIL MATES</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-emerald-700 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              className="text-stone-600 hover:text-emerald-700 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-stone-600 hover:text-emerald-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full justify-center items-center space-y-8">
          <button onClick={toggleMenu} className="absolute top-6 right-6 p-2 text-stone-600">
            <X className="w-8 h-8" />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              className="text-4xl font-serif text-emerald-900 hover:text-emerald-600"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8">
            <a href="https://instagram.com" className="flex items-center space-x-2 text-stone-500">
              <Instagram className="w-6 h-6" />
              <span>@trailmates_trailers</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
