"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUp, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  sections: { id: string; label: string }[];
}

export default function Navigation({ sections }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Toggle Theme class on document Element
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("light");
    }
  };

  // Monitor scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Header - Logo & Switchers */}
      <header className="fixed top-0 left-0 w-full z-40 bg-background/40 backdrop-blur-md border-b border-card-border/30 px-6 py-4 flex items-center justify-between lg:px-12">
        <div className="flex items-center gap-2">
          {/* Decorative small button indicators for aesthetic */}
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        </div>

        {/* Logo in the center */}
        <div className="absolute left-1/2 -translate-x-1/2 text-sm font-mono tracking-widest text-accent font-extrabold select-none">
          &lt;JAY/&gt;
        </div>

        {/* Action icons on right */}
        <div className="flex items-center gap-4 ml-auto">
          <button 
            className="p-1.5 rounded-md hover:bg-card-border/50 text-muted hover:text-foreground transition-colors"
            title="Source Code"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <Code2 size={18} />
          </button>
          
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted font-mono select-none mr-1">
              {isDark ? "DARK" : "LIGHT"}
            </span>
            <div 
              onClick={toggleTheme}
              className={`w-8 h-4 rounded-full p-0.5 cursor-pointer flex items-center transition-all ${
                isDark ? "bg-accent/20 justify-end" : "bg-card-border/80 justify-start"
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-accent"></div>
            </div>
          </div>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 rounded-md text-foreground hover:bg-card-border/50 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Desktop Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-full w-64 hidden lg:flex flex-col justify-center pl-12 z-30 select-none">
        <div className="flex flex-col gap-6">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group relative flex items-center text-left py-1"
              >
                <span
                  className={`text-sm font-semibold tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-accent font-bold"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {section.label.toUpperCase()}
                </span>
                
                {/* Custom dot indicator */}
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -left-4 w-1.5 h-1.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] bg-background/95 backdrop-blur-lg z-30 lg:hidden flex flex-col items-center justify-center gap-8"
          >
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-2xl font-bold tracking-widest transition-colors ${
                    isActive ? "text-accent" : "text-muted hover:text-foreground"
                  }`}
                >
                  {section.label.toUpperCase()}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-card hover:bg-card-border/80 border border-card-border text-foreground hover:text-accent shadow-lg shadow-black/50 z-40 transition-colors"
            title="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
