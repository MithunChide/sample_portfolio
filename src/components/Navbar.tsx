"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section highlights
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.replace("#", ""));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <span className="text-xl font-bold tracking-wider gradient-text font-sans">
            MITHUN.DEV
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold transition-colors duration-200 hover:text-primary relative py-1 ${
                activeSection === item.href.replace("#", "")
                  ? "text-primary"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {item.name}
              {activeSection === item.href.replace("#", "") && (
                <motion.span
                  layoutId="activeDot"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Actions (Theme toggle + Mobile Menu Button) */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-slate-200 dark:border-slate-800 mt-3 absolute w-full left-0 right-0 overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col py-6 px-8 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold py-2 transition-colors duration-200 hover:text-primary ${
                    activeSection === item.href.replace("#", "")
                      ? "text-primary border-l-2 border-primary pl-3"
                      : "text-slate-600 dark:text-slate-300 pl-3 border-l-2 border-transparent"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
