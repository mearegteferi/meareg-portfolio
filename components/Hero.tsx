import React from 'react';
import Profile from './assets/profile.jpg';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030014]">
      {/* Custom Keyframes for Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
          @keyframes blink {
            50% { border-color: transparent }
          }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-fade-up {
            animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            opacity: 0; /* Start hidden */
          }
          .animate-typing {
            overflow: hidden;
            white-space: nowrap;
            border-right: 4px solid #22d3ee; /* Cyan cursor */
            width: 0;
            animation: 
              typing 3s steps(30, end) forwards,
              blink 0.75s step-end infinite;
            animation-delay: 0.5s; /* Wait for "Building" to appear */
            animation-fill-mode: forwards;
          }
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradient-x 4s ease infinite;
          }
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-700 { animation-delay: 0.7s; }
        `}
      </style>

      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow"></div>
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[100px] animate-float-delayed"></div>

      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-20">

        {/* Text Section */}
        <div className="flex flex-col gap-6 text-center lg:text-left">

          {/* Badge */}
          <div className="animate-fade-up delay-100 inline-flex items-center justify-center lg:justify-start gap-2 py-1 px-3 rounded-full border border-purple-500/30 bg-purple-500/10 w-fit mx-auto lg:mx-0 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-cyan-300 text-xs font-semibold tracking-wide uppercase">Available for work</span>
          </div>

          {/* Main Headline */}
          <div className="relative">
            {/* "Building" - Slide Up */}
            <h1 className="animate-fade-up delay-200 text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter">
              Building <br />
            </h1>

            {/* "Digital Dreams" - Typewriter & Gradient */}
            <div className="inline-block">
              <h1
                className="text-3xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 pb-2 pr-1 border-r-4 border-cyan-400 overflow-hidden whitespace-nowrap"
                style={{
                  animation: 'typing 2s steps(14) forwards, blink 0.75s step-end infinite, gradient-x 4s ease infinite',
                  width: '0', // Start invisible
                  animationFillMode: 'forwards',
                  animationDelay: '0.5s' // Wait for "Building"
                }}
              >
                Web Applications
              </h1>
            </div>
          </div>

          <p className="animate-fade-up delay-500 text-gray-400 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
            I’m <span className="text-white font-semibold">Meareg Teferi</span>, a software engineer focused on building reliable backend systems and modern web applications.
          </p>

          {/* Buttons */}
          <div className="animate-fade-up delay-700 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-cyan-50 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              View Work
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 text-white font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm">
              Contact Me
            </a>
          </div>

          {/* Social Stats */}
          <div className="animate-fade-up delay-700 flex items-center justify-center lg:justify-start gap-6 mt-8 border-t border-white/5 pt-8">
            <StatItem label="Years Exp." value="1+" />
            <div className="w-[1px] h-10 bg-white/10"></div>
            <StatItem label="Projects" value="5+" />
            <div className="w-[1px] h-10 bg-white/10"></div>
            <StatItem label="Clients" value="2+" />
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center lg:justify-end animate-float">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
            {/* Spinning Ring */}
            <div className="absolute inset-0 rounded-full border border-purple-500/30 border-dashed animate-[spin_10s_linear_infinite]"></div>

            {/* Glowing Backdrop */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 opacity-20 blur-2xl"></div>

            {/* Main Image Mask */}
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
              <img
                src={Profile}
                alt="Meareg Teferi"
                className="w-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 glass-panel p-4 rounded-2xl flex items-center gap-3 animate-float-delayed shadow-lg shadow-purple-500/20">
              <div className="bg-green-500/20 p-2 rounded-lg">
                <span className="material-symbols-outlined text-green-400">code</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold">Current Stack</p>
                <p className="text-white font-bold">Django - FastAPI - React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="text-center lg:text-left">
    <h3 className="text-2xl font-bold text-white">{value}</h3>
    <p className="text-sm text-gray-500 uppercase tracking-wider">{label}</p>
  </div>
);

export default Hero;