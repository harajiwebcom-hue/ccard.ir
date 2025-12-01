import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { PageView } from '../types';

interface NavbarProps {
  activePage: PageView;
  setPage: (page: PageView) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: 'خانه' },
    { id: 'services', label: 'خدمات' },
    { id: 'blog', label: 'وبلاگ' },
    { id: 'about', label: 'درباره ما' },
    { id: 'contact', label: 'تماس با ما' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-2xl border-slate-200/60 shadow-sm py-2' 
          : 'bg-white/40 backdrop-blur-md border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600 focus:outline-none p-2 rounded-xl hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Logo Section */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group gap-3 select-none"
            onClick={() => setPage('home')}
          >
            <div className="relative w-11 h-11 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
                <defs>
                  <linearGradient id="logo_gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4F46E5" />
                    <stop offset="1" stopColor="#0EA5E9" />
                  </linearGradient>
                </defs>
                <rect width="40" height="40" rx="14" fill="url(#logo_gradient)" />
                <path d="M28 12H12C9.79086 12 8 13.7909 8 16V24C8 26.2091 9.79086 28 12 28H28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="28" cy="20" r="2.5" fill="white" />
                <path d="M13 20H19" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter font-latin leading-none flex items-center gap-0.5 text-slate-800">
                ccard<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-cyan-500">.ir</span>
              </span>
              <span className="text-[10px] text-slate-500 font-bold tracking-[0.2em] uppercase mt-0.5 ml-0.5">
                Premium Services
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-slate-50/80 rounded-full px-1.5 py-1.5 border border-slate-200/50 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className={`relative px-6 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                  activePage === item.id 
                    ? 'text-indigo-600 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Online Consultation */}
          <div className="hidden md:flex">
            <a 
              href="https://wa.me/989123772681"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 bg-slate-900 text-white pl-4 pr-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all duration-300 shadow-md hover:shadow-indigo-500/30 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span>مشاوره آنلاین</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 flex justify-between items-center border-b border-slate-100">
            <span className="font-black text-xl text-slate-900 font-latin">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-slate-900 rounded-lg bg-slate-50">
               <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 space-y-2 flex-1 overflow-y-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPage(item.id);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-4 rounded-xl text-base font-bold transition-all ${
                  activePage === item.id
                    ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.label}
                {activePage === item.id && <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />}
              </button>
            ))}
          </div>
          <div className="p-5 border-t border-slate-100 bg-slate-50">
            <a
               href="https://wa.me/989123772681"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-center gap-2 w-full px-4 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              دریافت مشاوره واتساپ
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;