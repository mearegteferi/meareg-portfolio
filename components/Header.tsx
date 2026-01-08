import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const NavLink: React.FC<{ href: string; label: string; onClick?: () => void }> = ({ href, label, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="relative text-gray-200 text-sm font-medium tracking-wide hover:text-cyan-400 transition-colors duration-300 group"
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  return (
    <>
      {/* Global Animations & Styles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          @keyframes float-delayed {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite 1s; }
          .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
          .glass-panel {
            background: rgba(17, 25, 40, 0.75);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.125);
          }
          .text-gradient {
            background: linear-gradient(to right, #c084fc, #6366f1, #22d3ee);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .bg-gradient-mesh {
            background: radial-gradient(circle at 50% 50%, #2a1b3d 0%, #030014 100%);
          }
        `}
      </style>

      <div className="fixed top-0 z-50 w-full flex justify-center px-4 pt-4">
        <header className="glass-panel w-full max-w-7xl rounded-full px-6 py-3 shadow-2xl shadow-purple-900/20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 group-hover:rotate-180 transition-transform duration-700">
                <span className="material-symbols-outlined text-white text-xl">code</span>
              </div>
              <h2 className="text-white text-lg font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                Magi-Teferi
              </h2>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex gap-6">
                <NavLink href="#home" label="Home" />
                <NavLink href="#about" label="About" />
                <NavLink href="#skills" label="Skills" />
                <NavLink href="#experience" label="Experience" />
                <NavLink href="#projects" label="Work" />
              </nav>
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="px-4 py-1.5 rounded-full 
                      bg-gradient-to-r from-purple-600 to-indigo-600
                      text-white text-xs font-bold
                      shadow-md shadow-purple-500/30
                      hover:shadow-purple-500/50 hover:scale-105
                      transition-all duration-300"
                >
                  Let's Talk
                </a>

                <a
                  href="https://github.com/mearegteferi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full 
                        bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 
                        text-white text-sm font-semibold
                        border border-gray-700
                        shadow-lg shadow-cyan-500/20
                        hover:shadow-cyan-500/40 hover:scale-105
                        hover:text-cyan-400
                        transition-all duration-300"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.74.11 3.03.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.79 1.08.79 2.18v3.23c0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                  <span>GitHub</span>
                </a>

              </div>


            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                <span className="material-symbols-outlined text-3xl">
                  {isMobileMenuOpen ? 'close' : 'menu_open'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col items-center gap-4 pb-4 text-center">
              <NavLink href="#home" label="Home" onClick={toggleMenu} />
              <NavLink href="#about" label="About" onClick={toggleMenu} />
              <NavLink href="#skills" label="Skills" onClick={toggleMenu} />
              <NavLink href="#projects" label="Projects" onClick={toggleMenu} />
              <NavLink href="#contact" label="Contact" onClick={toggleMenu} />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;