"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#F8FAFC]/80 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-12">
        {/* Main Navbar Card - Inspired by Image 1 */}
        <nav className="flex items-center justify-between bg-white/90 border border-slate-100 px-6 py-3 rounded-2xl shadow-sm">
          {/* 1. PORTFOLIO TEXT (Gradient Styling) */}
          <Link href="/" className="group">
            <motion.span
              className="text-2xl font-extrabold bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] bg-clip-text text-transparent transition-all duration-300 ease-in-out cursor-pointer hover:drop-shadow-[0_5px_15px_rgba(59,130,246,0.3)] inline-block"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              PORTFOLIO
            </motion.span>
          </Link>

          {/* 2. DESKTOP LINKS (Dark Blue) */}
          <ul className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-[#1E3A8A] hover:text-[#3B82F6] transition-colors font-semibold text-sm uppercase tracking-wider"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* 3. CTA BUTTON (Professional Gradient) */}
          <div className="hidden md:block">
            <Link href="#contact">
              <button className="bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] text-white px-8 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-95">
                Hire Me
              </button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1E3A8A] hover:bg-slate-50 rounded-lg transition-colors"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-[#1E3A8A] font-bold text-lg border-b border-slate-50 pb-2"
                >
                  {link.title}
                </Link>
              ))}
              <button className="w-full bg-[#3B82F6] text-white py-4 rounded-xl font-bold">
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
