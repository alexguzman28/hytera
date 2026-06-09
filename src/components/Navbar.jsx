import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Cómo Funciona', href: '#how-it-works' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-neutral-900 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3.5 group focus:outline-none" id="nav-logo">
          <svg className="w-10 h-8 text-white transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 10 24 L 38 24 C 48 24, 52 12, 62 12 L 90 12" />
            <path d="M 10 28 L 38 28 C 48 28, 52 16, 62 16 L 90 16" />
            <path d="M 10 32 L 38 32 C 48 32, 52 20, 62 20 L 90 20" />
            <path d="M 45 28 L 55 16" />
            <path d="M 47 20 L 51 24" />
          </svg>
          <span className="font-display font-bold text-base md:text-lg tracking-wider text-white uppercase">
            HYTERA IA
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <a
            id="btn-book-demo-desktop"
            href="#contact"
            className="relative inline-flex items-center justify-center px-5 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-white rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] focus:outline-none focus:ring-1 focus:ring-white"
          >
            Agendar Demo
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            id="btn-mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bg-black border-b border-neutral-900 transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible h-screen' : 'scale-y-95 opacity-0 invisible h-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 bg-black h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-neutral-300 hover:text-white transition-colors duration-200 py-2 border-b border-neutral-900"
            >
              {link.name}
            </a>
          ))}
          <a
            id="btn-book-demo-mobile"
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3.5 text-sm font-semibold uppercase tracking-wider text-black bg-white rounded-sm transition-all duration-200 hover:bg-neutral-200 focus:outline-none mt-4"
          >
            Agendar Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
