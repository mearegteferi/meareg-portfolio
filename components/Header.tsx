import React, { useState, useEffect } from 'react';
import { useTheme } from '../App';

const navLinks = [
  { href: '#home',       label: 'Home',       id: 'home' },
  { href: '#about',      label: 'About',      id: 'about' },
  { href: '#skills',     label: 'Skills',     id: 'skills' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#projects',   label: 'Projects',   id: 'projects' },
];

const Logo: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <a href="#home" className="group flex items-center gap-2.5 select-none">
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-600/30 group-hover:shadow-indigo-500/50 transition-all duration-300 group-hover:scale-105">
        <span className="text-sm font-black text-white leading-none">M</span>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-base font-black tracking-tight transition-colors group-hover:text-indigo-400 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Meareg
        </span>
        <span className="text-[9px] font-medium text-indigo-400 tracking-widest uppercase group-hover:text-violet-400 transition-colors">
          Teferi
        </span>
      </div>
    </a>
  );
};

/* Sun icon */
const SunIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

/* Moon icon */
const MoonIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const Header: React.FC = () => {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeSection, setActive] = useState('home');

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      /* Active section via IntersectionObserver-style scroll check */
      const sections = navLinks.map((l) => l.id);
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const bgClass = scrolled
    ? isDark
      ? 'bg-[#111118]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20'
      : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
    : 'bg-transparent border-b border-transparent';

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${bgClass}`}>
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">

        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors relative group ${
                  isActive
                    ? 'text-indigo-400 font-semibold'
                    : isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-gradient-to-r from-indigo-400 to-violet-400 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark/light toggle */}
          <button
            onClick={toggle}
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 border ${
              isDark
                ? 'border-white/15 bg-white/5 text-gray-400 hover:text-yellow-300 hover:border-yellow-400/30 hover:bg-yellow-400/10'
                : 'border-gray-200 bg-gray-100 text-gray-500 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <a
            href="https://github.com/mearegteferi"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 shadow-md shadow-indigo-600/25 hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-colors ${
              isDark ? 'border-white/15 bg-white/5 text-gray-400' : 'border-gray-200 bg-gray-100 text-gray-500'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className={`p-1 transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`border-t px-4 py-4 flex flex-col gap-4 ${isDark ? 'border-white/10 bg-[#111118]' : 'border-gray-200 bg-white'}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm transition-colors ${
                activeSection === link.id
                  ? 'text-indigo-400 font-semibold'
                  : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="w-fit px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
