import React, { useEffect, useState } from 'react';
import Profile from './assets/profile.jpg';
import { useTheme } from '../App';

const ROLES = [
  'Backend Engineer',
  'FastAPI Specialist',
  'Django Developer',
  'Systems Architect',
  'AI Integration Dev',
];

const STACK_TAGS = ['FastAPI', 'Django', 'PostgreSQL', 'Redis', 'React', 'Docker'];

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [roleIdx, setRoleIdx]     = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]   = useState(false);
  const [charIdx, setCharIdx]     = useState(0);

  /* ── Typewriter ── */
  useEffect(() => {
    const current = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx <= current.length) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx((c: number) => c + 1); }, 65);
    } else if (!deleting && charIdx > current.length) {
      t = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx >= 0) {
      t = setTimeout(() => { setDisplayed(current.slice(0, charIdx)); setCharIdx((c: number) => c - 1); }, 35);
    } else {
      setDeleting(false);
      setRoleIdx((i: number) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, roleIdx]);

  /* ── CV download ── */
  const downloadCV = async () => {
    try {
      const res = await fetch('/resume.pdf');
      if (!res.ok) throw new Error();
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Meareg_Teferi_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open('/resume.pdf', '_blank');
    }
  };

  return (
    <div
      id="home"
      className="relative w-full h-screen flex flex-col overflow-hidden transition-colors duration-300"
      style={{
        background: isDark
          ? 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(99,102,241,0.18) 0%, transparent 60%), #0c0c14'
          : 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(99,102,241,0.10) 0%, transparent 60%), #f7f7fd',
      }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse at center, rgba(99,102,241,0.13) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Side accent lines */}
      <div className={`absolute left-0 inset-y-0 w-px ${isDark ? 'bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent' : 'bg-gradient-to-b from-transparent via-indigo-400/15 to-transparent'}`} />
      <div className={`absolute right-0 inset-y-0 w-px ${isDark ? 'bg-gradient-to-b from-transparent via-violet-500/15 to-transparent' : 'bg-gradient-to-b from-transparent via-violet-400/10 to-transparent'}`} />

      {/* ── Main content — fills between header (64px) and scroll cue (56px) ── */}
      <div className="relative z-10 flex-1 flex items-center w-full max-w-6xl mx-auto px-6 sm:px-10" style={{ paddingTop: '64px' }}>
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-4">

            {/* Status pill */}
            <div className="fade-up fade-up-1 flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Available for work</span>
              </div>
              <div className={`h-px w-12 ${isDark ? 'bg-white/10' : 'bg-gray-200'}`} />
            </div>

            {/* Name */}
            <div className="fade-up fade-up-2">
              <p className={`text-xs font-semibold tracking-[0.2em] uppercase mb-1 ${isDark ? 'text-indigo-400' : 'text-indigo-500'}`}>
                Hello, I'm
              </p>
              <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Meareg
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                Teferi
              </h1>
            </div>

            {/* Typewriter */}
            <div className="fade-up fade-up-3 flex items-center gap-3">
              <div className="w-6 h-px bg-gradient-to-r from-indigo-500 to-violet-500 shrink-0" />
              <span className={`text-lg font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                {displayed}
                <span className="cursor-blink text-indigo-400">|</span>
              </span>
            </div>

            {/* Bio */}
            <p className={`fade-up fade-up-3 text-sm leading-relaxed max-w-md ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Backend-heavy engineer specializing in scalable systems with{' '}
              <span className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>Clean Architecture</span> &{' '}
              <span className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>DDD</span>.
              Building with <span className="text-indigo-400 font-semibold">FastAPI</span>,{' '}
              <span className="text-indigo-400 font-semibold">Django</span> &{' '}
              <span className="text-indigo-400 font-semibold">React</span>.
            </p>

            {/* Stack tags */}
            <div className="fade-up fade-up-3 flex flex-wrap gap-1.5">
              {STACK_TAGS.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full border transition-colors ${
                    isDark
                      ? 'border-white/10 bg-white/5 text-gray-400 hover:border-indigo-500/40 hover:text-indigo-300'
                      : 'border-gray-200 bg-white text-gray-500 hover:border-indigo-300 hover:text-indigo-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA row */}
            <div className="fade-up fade-up-4 flex flex-wrap items-center gap-2.5">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold overflow-hidden shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">View Projects</span>
                <svg className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center px-6 py-2.5 rounded-xl text-sm font-bold border hover:-translate-y-0.5 transition-all duration-200 ${
                  isDark
                    ? 'border-white/15 text-gray-300 hover:border-indigo-500/50 hover:text-white hover:bg-indigo-500/10'
                    : 'border-gray-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                Hire Me
              </a>

              <button
                onClick={downloadCV}
                className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold border hover:-translate-y-0.5 transition-all duration-200 ${
                  isDark
                    ? 'border-white/10 text-gray-500 hover:border-emerald-500/40 hover:text-emerald-400 hover:bg-emerald-500/8'
                    : 'border-gray-200 text-gray-400 hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                CV
              </button>
            </div>


          </div>

          {/* ── RIGHT: photo ── */}
          <div className="fade-up fade-up-3 flex justify-center lg:justify-end items-center">
            <div className="relative">
              {/* Glow */}
              <div
                className="absolute -inset-6 rounded-[2rem] pointer-events-none"
                style={{
                  background: isDark
                    ? 'radial-gradient(ellipse at center, rgba(99,102,241,0.18) 0%, transparent 70%)'
                    : 'radial-gradient(ellipse at center, rgba(99,102,241,0.10) 0%, transparent 70%)',
                }}
              />

              {/* Corner accents */}
              <div className="absolute -top-2.5 -left-2.5 w-5 h-5 border-t-2 border-l-2 border-indigo-500/50 rounded-tl-lg" />
              <div className="absolute -top-2.5 -right-2.5 w-5 h-5 border-t-2 border-r-2 border-violet-500/40 rounded-tr-lg" />
              <div className="absolute -bottom-2.5 -left-2.5 w-5 h-5 border-b-2 border-l-2 border-violet-500/40 rounded-bl-lg" />
              <div className="absolute -bottom-2.5 -right-2.5 w-5 h-5 border-b-2 border-r-2 border-indigo-500/50 rounded-br-lg" />

              {/* Photo */}
              <img
                src={Profile}
                alt="Meareg Teferi"
                className={`relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 object-cover rounded-2xl shadow-2xl ${isDark ? 'border border-white/10' : 'border border-gray-200'}`}
              />

              {/* Stack badge */}
              <div
                className={`float-badge absolute -bottom-4 -left-4 rounded-xl px-3 py-2 shadow-xl backdrop-blur-md border ${
                  isDark ? 'bg-[#13131f]/90 border-indigo-500/25' : 'bg-white/90 border-indigo-200'
                }`}
              >
                <p className="text-[8px] text-indigo-400 uppercase tracking-widest font-bold">Stack</p>
                <p className={`text-xs font-bold mt-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>FastAPI · Django</p>
              </div>


            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
