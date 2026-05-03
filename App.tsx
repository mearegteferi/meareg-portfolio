import React, { createContext, useContext, useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* ── Theme context ── */
export type Theme = 'dark' | 'light';
export const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: 'dark',
  toggle: () => {},
});
export const useTheme = () => useContext(ThemeContext);

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [showTop, setShowTop] = useState(false);

  /* Persist theme */
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  /* Back-to-top visibility */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <style>{`
        /* ── Scroll-fade ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { opacity: 0; animation: fadeUp 0.6s ease forwards; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.15s; }
        .fade-up-3 { animation-delay: 0.25s; }
        .fade-up-4 { animation-delay: 0.35s; }
        .fade-up-5 { animation-delay: 0.45s; }

        /* ── Ambient pulse ── */
        @keyframes ambientPulse {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50%       { opacity: 0.55; transform: scale(1.06); }
        }
        .ambient { animation: ambientPulse 7s ease-in-out infinite; }

        /* ── Float badge ── */
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        .float-badge { animation: floatY 4s ease-in-out infinite; }

        /* ── Cursor blink ── */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .cursor-blink { animation: blink 1s step-end infinite; }

        /* ── Card hover lift ── */
        .card-hover {
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .card-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.12);
        }

        /* ── Back-to-top button ── */
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        .back-top-enter { animation: fadeInScale 0.2s ease forwards; }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: ${isDark ? '#111118' : '#f1f1f5'}; }
        ::-webkit-scrollbar-thumb { background: ${isDark ? '#2d2d4a' : '#c4c4d4'}; border-radius: 3px; }

        /* ── Light mode overrides ── */
        .light-bg-primary   { background-color: #f8f8fc; }
        .light-bg-secondary { background-color: #f0f0f8; }
      `}</style>

      <div
        className={`relative flex min-h-screen w-full flex-col overflow-x-hidden transition-colors duration-300 ${
          isDark ? 'bg-[#111118] text-white' : 'bg-[#f8f8fc] text-gray-900'
        }`}
      >
        <Header />
        <main className="flex-grow">
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="experience"><Experience /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />

        {/* ── Back to top ── */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="back-top-enter fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-200 flex items-center justify-center"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        )}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
