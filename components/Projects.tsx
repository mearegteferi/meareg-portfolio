import React, { useState, useRef } from 'react';
import { useTheme } from '../App';

import wasteImg      from './assets/waste.png';
import restaurantImg from './assets/restaurant.png';
import odooImg       from './assets/odoo.png';
import posImg        from './assets/pos.png';
import taskImg       from './assets/task.png';
import ethioHisabImg from './assets/ethio-hisab.svg';

const projects = [
  {
    title: 'AI-Powered Project Management System',
    badge: 'Personal Project',
    description:
      'High-concurrency task management platform with AI-driven task decomposition. Pydantic AI Agents process natural language descriptions and auto-generate structured task hierarchies.',
    image: taskImg,
    stack: ['FastAPI', 'Next.js', 'Redis', 'PostgreSQL', 'Pydantic AI'],
    highlights: [
      'Sub-second caching with Redis for low-latency state management',
      'AI Agents decompose unstructured prompts into actionable task workflows',
    ],
    github: 'https://github.com/mearegteferi/task_management',
    demo: '',
  },
  {
    title: 'Ethio Hisab — Accounting SaaS',
    badge: 'Production · Digital Merkato',
    description:
      'Backend for a production accounting SaaS tailored to the Ethiopian market. Applied Domain-Driven Design to model local financial and tax regulations into decoupled backend domains with full ACID compliance.',
    image: ethioHisabImg,
    stack: ['Django', 'DRF', 'PostgreSQL', 'DDD', 'Python'],
    highlights: [
      'ACID-compliant financial ledgers with optimized large-scale reporting queries',
      'DDD domains accurately model Ethiopian tax and financial regulations',
    ],
    github: '',
    demo: '',
  },
  {
    title: 'Smart Waste Management Platform',
    badge: 'Internship · Mekelle City',
    description:
      'Geospatial backend for Mekelle City Administration to calculate optimal routing for city-wide waste collection, with automated reporting and admin dashboards.',
    image: wasteImg,
    stack: ['Django', 'React', 'Redux', 'Djoser', 'Material UI', 'PostgreSQL'],
    highlights: [
      'Geospatial routing for waste collection optimization',
      'Async message queues for background processing and report generation',
    ],
    github: 'https://github.com/mearegteferi/waste-management',
    demo: '',
  },
  {
    title: 'Multi-Branch POS System',
    badge: 'Team Project',
    description:
      'Point-of-sale system with real-time inventory synchronization across multiple branches. Heavily optimized FastAPI backend using the Repository Pattern.',
    image: posImg,
    stack: ['FastAPI', 'React', 'Tailwind CSS', 'PostgreSQL', 'Pydantic'],
    highlights: [
      'Real-time inventory sync across branches',
      'Repository Pattern with strict Pydantic validation for data integrity',
    ],
    github: '',
    demo: '',
  },
  {
    title: 'Custom ERP Solutions',
    badge: 'Professional · Niyat Consultancy',
    description:
      'Customized Odoo ERP modules across inventory, sales, and manufacturing. Extended core Python/JavaScript logic to automate complex supply chain workflows.',
    image: odooImg,
    stack: ['Odoo', 'Python', 'JavaScript', 'PostgreSQL'],
    highlights: [
      'Modules: Inventory, Sales, Manufacturing, HR',
      'Automated supply chain and manufacturing workflows',
    ],
    github: 'https://github.com/mearegteferi/odoo',
    demo: '',
  },
  {
    title: 'Sofi Restaurant Management System',
    badge: 'Deployed · Semester Project',
    description:
      'Full-stack MERN application with end-to-end cart management, secure checkout, order management, and dynamic table reservations via centralized Redux state.',
    image: restaurantImg,
    stack: ['Node.js', 'Express', 'React', 'Redux', 'MongoDB', 'Tailwind CSS'],
    highlights: [
      'Live deployed application',
      'Centralized Redux state for cart, orders, and reservations',
    ],
    github: 'https://github.com/mearegteferi/Sofi-Restaurant',
    demo: 'https://sofi-restaurant.vercel.app/',
  },
];

const PER_PAGE = 3;

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [page, setPage]         = useState(0);
  const [animDir, setAnimDir]   = useState<'left' | 'right'>('right');
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const visible    = projects.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const goTo = (next: number, dir: 'left' | 'right') => {
    if (animating || next === page) return;
    setAnimDir(dir);
    setAnimating(true);
    setTimeout(() => { setPage(next); setAnimating(false); }, 320);
  };
  const prev = () => goTo(page > 0 ? page - 1 : totalPages - 1, 'left');
  const next = () => goTo(page < totalPages - 1 ? page + 1 : 0, 'right');

  const bg      = isDark ? 'bg-[#13131c]'   : 'bg-[#f0f0f8]';
  const cardBg  = isDark ? 'bg-[#16161f]'   : 'bg-white';
  const border  = isDark ? 'border-white/8' : 'border-gray-200';
  const titleC  = isDark ? 'text-white'     : 'text-gray-900';
  const bodyC   = isDark ? 'text-gray-400'  : 'text-gray-500';
  const subC    = isDark ? 'text-gray-500'  : 'text-gray-400';
  const techBg  = isDark ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-500';
  const hlC     = isDark ? 'text-gray-500'  : 'text-gray-400';
  const navBtn  = isDark
    ? 'border-white/15 bg-white/5 text-gray-400 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10'
    : 'border-gray-200 bg-white text-gray-400 hover:text-gray-900 hover:border-indigo-400/50 hover:bg-indigo-50 shadow-sm';
  const dotActive   = 'bg-indigo-500';
  const dotInactive = isDark ? 'bg-white/20 hover:bg-white/40' : 'bg-gray-300 hover:bg-gray-400';

  return (
    <section id="projects" ref={sectionRef} className={`relative w-full py-24 px-4 ${bg} overflow-hidden transition-colors duration-300`}>
      <div className="ambient absolute top-0 right-0 w-[320px] h-[320px] rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <SectionLabel text="Projects" />
            <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${titleC}`}>Selected Work</h2>
            <p className={`mt-2 text-sm ${subC}`}>Academic, professional, and personal projects.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className={`text-sm tabular-nums ${subC}`}>
              <span className={`font-semibold ${titleC}`}>{page + 1}</span>
              <span className="mx-1">/</span>{totalPages}
            </span>
            <button onClick={prev} className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 ${navBtn}`} aria-label="Previous">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={next} className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 ${navBtn}`} aria-label="Next">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-5 transition-all duration-300"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? `translateX(${animDir === 'right' ? '-30px' : '30px'})` : 'translateX(0)',
            }}
          >
            {visible.map((p) => (
              <div key={p.title} className={`card-hover flex flex-col md:flex-row gap-6 p-6 rounded-xl ${cardBg} border ${border} hover:border-indigo-500/35`}>
                <div className="md:w-[200px] shrink-0">
                  <img src={p.image} alt={p.title}
                    className={`w-full h-36 md:h-full object-cover rounded-lg border ${border}`} />
                </div>
                <div className="flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className={`font-semibold text-base leading-snug ${titleC}`}>{p.title}</h3>
                      <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-500/15 border border-indigo-500/25 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {p.badge}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed ${bodyC}`}>{p.description}</p>
                    <ul className="mt-3 space-y-1">
                      {p.highlights.map((h, i) => (
                        <li key={i} className={`flex gap-2 text-xs ${hlC}`}>
                          <span className="text-indigo-400 shrink-0">›</span>{h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((tech) => (
                        <span key={tech} className={`text-[11px] px-2 py-0.5 rounded border ${techBg}`}>{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {p.demo && (
                        <a href={p.demo} target="_blank" rel="noopener noreferrer"
                          className="text-xs font-semibold text-indigo-300 border border-indigo-500/30 px-3 py-1.5 rounded-lg hover:bg-indigo-500/15 transition-colors">
                          Live Demo ↗
                        </a>
                      )}
                      {p.github && (
                        <a href={p.github} target="_blank" rel="noopener noreferrer"
                          className={`text-xs font-semibold border px-3 py-1.5 rounded-lg transition-colors ${isDark ? 'text-gray-300 border-white/15 hover:text-white hover:border-white/30' : 'text-gray-500 border-gray-200 hover:text-gray-900 hover:border-gray-300'}`}>
                          GitHub ↗
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button key={i} onClick={() => goTo(i, i > page ? 'right' : 'left')}
              className={`rounded-full transition-all duration-300 ${i === page ? `w-6 h-2 ${dotActive}` : `w-2 h-2 ${dotInactive}`}`}
              aria-label={`Page ${i + 1}`} />
          ))}
        </div>

      </div>
    </section>
  );
};

const SectionLabel: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">{text}</span>
  </div>
);

export default Projects;
