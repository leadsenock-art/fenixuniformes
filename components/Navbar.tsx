import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Produtos', href: '#products' },
    { name: 'Benefícios', href: '#features' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled ? 'py-3 md:py-4' : 'py-4 md:py-6'
        }`}
      >
        <div className={`container mx-auto px-4 md:px-6 transition-all duration-500 ${
            isScrolled ? 'max-w-6xl' : ''
        }`}>
          <div className={`
            flex justify-between items-center px-4 md:px-6 py-2 md:py-3 
            ${isScrolled 
              ? 'bg-tactical-dark/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50' 
              : 'bg-transparent'
            } transition-all duration-500
          `}>
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group relative z-50">
              <img 
                src="https://i.imgur.com/oqaGxkZ.png" 
                alt="Fenix Uniforme Logo" 
                className="h-10 md:h-16 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(234,179,8,0.4)] transition-all duration-500"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-wide uppercase relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tactical-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
              <a
                href="https://wa.me/5571996534605"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-xs font-bold text-black bg-gradient-to-r from-tactical-accent to-yellow-400 hover:to-yellow-300 transition-all duration-300 uppercase tracking-widest rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] hover:-translate-y-0.5"
              >
                Falar Agora
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Alternar menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-tactical-dark/95 backdrop-blur-xl pt-28 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-6 min-h-[calc(100vh-120px)] justify-start">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-slate-200 hover:text-tactical-accent transition-colors uppercase tracking-widest py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5571996534605"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 w-full max-w-xs text-center px-8 py-4 bg-tactical-accent text-black font-bold rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(234,179,8,0.4)] active:scale-95 transition-transform"
              >
                WhatsApp Oficial
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;