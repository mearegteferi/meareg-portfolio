import React from 'react';
import { useTheme } from '../App';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`w-full border-t py-10 px-4 transition-colors duration-300 ${isDark ? 'border-white/10 bg-[#0e0e16]' : 'border-gray-200 bg-white'}`}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3 select-none">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-600/30 group-hover:shadow-indigo-500/50 group-hover:scale-105 transition-all duration-300">
            <span className="text-lg font-black text-white leading-none">M</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className={`text-lg font-black tracking-tight group-hover:text-indigo-400 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Meareg
            </span>
            <span className="text-[10px] font-medium text-indigo-400 tracking-widest uppercase group-hover:text-violet-400 transition-colors">
              Teferi · Backend Engineer
            </span>
          </div>
        </a>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {[
            { label: 'About',    href: '#about' },
            { label: 'Skills',   href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact',  href: '#contact' },
          ].map((l) => (
            <a key={l.href} href={l.href} className={`text-xs transition-colors ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-700'}`}>
              {l.label}
            </a>
          ))}
          <span className={`hidden sm:block ${isDark ? 'text-white/10' : 'text-gray-200'}`}>|</span>
          <a href="https://github.com/mearegteferi" target="_blank" rel="noopener noreferrer"
            className={`text-xs transition-colors ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-700'}`}>GitHub ↗</a>
          <a href="https://www.linkedin.com/in/meareg-teferi" target="_blank" rel="noopener noreferrer"
            className={`text-xs transition-colors ${isDark ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-700'}`}>LinkedIn ↗</a>
        </div>

        <p className={`text-xs shrink-0 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
          © {new Date().getFullYear()} Meareg Teferi
        </p>

      </div>
    </footer>
  );
};

export default Footer;
