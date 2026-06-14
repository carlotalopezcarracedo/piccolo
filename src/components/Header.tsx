/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Carta', href: '#carta' },
    { name: 'Especialidades', href: '#specialties' },
    { name: 'Restaurante', href: '#experiencia' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-ivory/80 backdrop-blur-lg border-b border-onyx/5">
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-onyx p-2 -ml-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>

        {/* Brand */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <a href="#" className="font-serif text-2xl tracking-tighter text-onyx font-medium flex items-center gap-3">
             <div className="w-8 h-8 border border-onyx/20 rounded-full flex items-center justify-center text-[12px] italic font-normal">ip</div>
             Il Piccolo
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-[11px] uppercase tracking-[0.3em] font-medium text-onyx/60 hover:text-tomato-red transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-8 ml-6">
             <a href="tel:986859999" className="font-sans text-[11px] font-medium text-onyx/80 border-l border-onyx/10 pl-8">
               986 85 99 99
             </a>
             <button className="bg-onyx text-ivory py-3 px-8 font-sans text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-tomato-red hover:text-white transition-all">
               Reservar
             </button>
          </div>
        </div>

        {/* Mobile Call Icon */}
        <div className="flex-1 lg:hidden flex justify-end">
           <a href="tel:986859999" className="text-onyx p-2 -mr-2">
             <span className="sr-only">Llamar</span>
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
           </a>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed top-20 left-0 w-full bg-ivory border-b border-onyx/5 shadow-2xl overflow-hidden h-[calc(100vh-80px)] overflow-y-auto"
          >
            <div className="flex flex-col p-10 gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-4xl font-medium text-onyx tracking-tight"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 border-t border-onyx/5 flex flex-col gap-6">
                <div>
                   <p className="font-sans text-[10px] uppercase tracking-[0.3em] font-medium text-onyx/40 mb-2">Reservas</p>
                   <a href="tel:986859999" className="font-serif text-3xl font-medium text-onyx">
                     986 85 99 99
                   </a>
                </div>
                <button className="w-full bg-onyx text-ivory py-5 font-sans text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-tomato-red transition-all">
                  Reservar
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
