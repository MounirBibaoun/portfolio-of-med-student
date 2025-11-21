"use client";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-pink-50 border-b border-pink-200 relative z-20">
      <Logo />

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-pink-700 font-medium">
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-pink-700 transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-pink-700 transition-opacity duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-pink-700 transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-pink-50 border-t border-pink-200 flex flex-col items-center py-4 md:hidden gap-4 shadow-md"
          >
            <Link href="#about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
