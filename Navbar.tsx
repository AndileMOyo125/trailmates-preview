import React, { useState } from 'react';
import { Menu, X, Mountain } from 'lucide-react';
import { WHATSAPP_LINK } from './constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Mountain className="h-8 w-8 text-emerald-600" />
            <span className="font-serif text-2xl font-bold text-stone-900">Trail Mates</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Home</a>
            <a href="#walks" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Walks</a>
            <a href="#hikes" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Hikes</a>
            <a href="#contact" className="text-stone-600 hover:text-emerald-600 font-medium transition-colors">Contact</a>
            <a 
              href={WHATSAPP_LINK}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-100"
            >
              Join Group
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <a href="#" className="block px-3 py-4 text-lg font-medium text-stone-600 hover:text-emerald-600 hover:bg-stone-50 rounded-xl" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#walks" className="block px-3 py-4 text-lg font-medium text-stone-600 hover:text-emerald-600 hover:bg-stone-50 rounded-xl" onClick={() => setIsOpen(false)}>Walks</a>
            <a href="#hikes" className="block px-3 py-4 text-lg font-medium text-stone-600 hover:text-emerald-600 hover:bg-stone-50 rounded-xl" onClick={() => setIsOpen(false)}>Hikes</a>
            <a href="#contact" className="block px-3 py-4 text-lg font-medium text-stone-600 hover:text-emerald-600 hover:bg-stone-50 rounded-xl" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};