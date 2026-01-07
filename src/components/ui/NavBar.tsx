"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'hey', label: 'Hey', icon: '☀️' },
  { id: 'work', label: 'Work', icon: null },
  { id: 'story', label: 'Story', icon: null },
  { id: 'chat', label: 'Chat', icon: null },
];

const NavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('hey');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll to sync active tab (simple version)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 500) setActiveTab('hey');
      else if (scrollY < 1800) setActiveTab('work');
      else if (scrollY < 2800) setActiveTab('story');
      else setActiveTab('chat');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop Pill */}
      <div className="hidden md:flex items-center bg-black rounded-full p-1.5 shadow-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="relative px-6 py-2.5 text-sm font-bold transition-colors z-10"
          >
            <span className={activeTab === item.id ? 'text-black' : 'text-white/60 hover:text-white'}>
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </span>
            {activeTab === item.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-[#FFD700] rounded-full -z-10"
                transition={{ type: 'spring', duration: 0.6, bounce: 0.2 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Mobile Nav Toggle */}
      <div className="md:hidden flex items-center bg-black rounded-full px-4 py-2 text-white shadow-xl min-w-[280px] justify-between">
        <div className="flex items-center gap-2">
            <span className="text-xl">☀️</span>
            <span className="text-xs font-bold uppercase tracking-widest">Daniel Sun</span>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center gap-1 text-sm font-bold"
        >
          Menu {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-16 left-0 right-0 bg-black rounded-3xl p-4 flex flex-col gap-2 md:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`py-4 px-6 rounded-2xl text-left font-black text-2xl ${activeTab === item.id ? 'bg-[#FFD700] text-black' : 'text-white'}`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
