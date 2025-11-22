"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { id: "journey", label: "Journey" },
    { id: "skills", label: "Skills" },
    { id: "gallery", label: "Gallery" },
    { id: "presentations", label: "Presentations" },
    { id: "knowledge", label: "Knowledge" }
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-sm border-b border-pink-200/50 relative z-50">
      {/* Logo with Med Student */}
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Logo />
        </motion.div>
        <div className="visible sm:block">
          <div className=" font-bold text-pink-600 text-2xl">Med Student</div>
          <div className="text-xs text-pink-500">UPSSA</div>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-pink-700 font-medium hover:text-pink-500 transition-colors duration-300 relative group"
          >
            {item.label}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300" />
          </button>
        ))}
      </div>

      {/* Contact Button */}
      <motion.button
        onClick={() => scrollToSection("footer")}
        className="hidden md:block px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 text-sm font-medium"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact
      </motion.button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-pink-700 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-center gap-1">
          <div className={`w-6 h-0.5 bg-pink-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-pink-600 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-pink-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </div>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-pink-200 md:hidden flex flex-col items-center py-4 gap-4 shadow-lg"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-pink-700 font-medium hover:text-pink-500 transition-colors duration-300 py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("footer")}
              className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 text-sm font-medium mt-2"
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}