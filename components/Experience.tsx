import React, { useState } from 'react';
import { useTheme } from '../App';

const experiences = [
  {
    role: 'Backend-Heavy Fullstack Engineer',
    company: 'Niyat Consultancy',
    location: 'Addis Ababa, Ethiopia',
    date: 'April 2025 – Present',
    type: 'Full-time',
    bullets: [
      'Built scalable, OpenAPI-standard REST APIs with FastAPI, decoupling core business logic through Clean Architecture principles.',
      'Optimized system performance for high-traffic environments using async programming and RabbitMQ for event-driven communication.',
      'Designed and implemented secure authentication with strict, granular Role-Based Access Control (RBAC).',
      'Developed fault-tolerant third-party payment gateways with strict state synchronization and automated error recovery.',
    ],
    tags: ['FastAPI', 'Python', 'RabbitMQ', 'RBAC', 'Clean Architecture', 'PostgreSQL'],
  },
  {
    role: 'Backend Engineer',
    company: 'Digital Merkato',
    location: 'Addis Ababa, Ethiopia',
    date: 'December 2024 – April 2025',
    type: 'Full-time',
    bullets: [
      'Developed the backend for Ethio Hisab, an accounting SaaS tailored to the Ethiopian market, using Django.',
      'Applied Domain-Driven Design to accurately model local financial and tax regulations into decoupled backend domains.',
      'Ensured ACID compliance for financial ledgers while optimizing queries for large-scale financial reporting.',
    ],
    tags: ['Django', 'Python', 'DDD', 'PostgreSQL', 'ACID Compliance'],
  },
];

const education = {
  degree: 'BSc in Software Engineering',
  school: 'Mekelle University',
  date: 'Graduated November 2024',
  details: ['CGPA: 3.81 / 4.0', 'National Exit Exam: 82%'],
};

const ChevronIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [expanded, setExpanded] = useState<string | null>(null);

  const bg      = isDark ? 'bg-[#111118]'   : 'bg-[#f8f8fc]';
  const cardBg  = isDark ? 'bg-[#16161f]'   : 'bg-white';
  const border  = isDark ? 'border-white/8' : 'border-gray-200';
  const titleC  = isDark ? 'text-white'     : 'text-gray-900';
  const bodyC   = isDark ? 'text-gray-400'  : 'text-gray-500';
  const subC    = isDark ? 'text-gray-500'  : 'text-gray-400';
  const dotBg   = isDark ? 'bg-[#111118]'   : 'bg-[#f8f8fc]';
  const tagBg   = isDark ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-600';
  const eduTag  = isDark ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-600';
  const typePill = isDark ? 'bg-white/5 border-white/8 text-gray-500' : 'bg-gray-100 border-gray-200 text-gray-400';
  const divider  = isDark ? 'border-white/8' : 'border-gray-100';
  const toggleBtn = (isOpen: boolean) => isOpen
    ? 'bg-indigo-500/20 border-indigo-500/40'
    : isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
             : 'bg-gray-100 border-gray-200 hover:bg-gray-200 hover:border-gray-300';

  return (
    <div id="experience" className={`relative w-full py-24 px-4 ${bg} overflow-hidden transition-colors duration-300`}>
      <div className="ambient absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[90px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto">

        <div className="mb-14">
          <SectionLabel text="Experience" />
          <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${titleC}`}>Career Timeline</h2>
          <p className={`mt-2 text-sm ${subC}`}>Professional experience and academic background.</p>
        </div>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/30 to-transparent" />

          <div className="space-y-5">
            {experiences.map((exp) => {
              const isOpen = expanded === exp.company;
              return (
                <div key={exp.company} className="relative pl-10">
                  <div className={`absolute left-0 top-5 w-[15px] h-[15px] rounded-full border-2 transition-all duration-300 ${
                    isOpen ? 'border-indigo-400 bg-indigo-500/30 shadow-[0_0_8px_rgba(99,102,241,0.5)]' : `border-white/30 ${dotBg}`
                  }`} />

                  <div className={`rounded-xl border ${cardBg} transition-all duration-300 ${
                    isOpen ? 'border-indigo-500/40 shadow-lg shadow-indigo-500/10' : `${border} hover:border-indigo-400/30`
                  }`}>
                    <button type="button" onClick={() => setExpanded(isOpen ? null : exp.company)}
                      className="w-full text-left" aria-expanded={isOpen}>
                      <div className="flex items-center justify-between gap-4 px-6 py-5">
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-semibold text-base ${titleC}`}>{exp.role}</h3>
                          <p className="text-indigo-400 text-sm mt-0.5">{exp.company} · {exp.location}</p>
                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span className={`text-xs border px-2.5 py-0.5 rounded-full ${typePill}`}>{exp.type}</span>
                            <span className={`text-xs ${subC}`}>{exp.date}</span>
                          </div>
                        </div>
                        <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${toggleBtn(isOpen)}`}>
                          <ChevronIcon open={isOpen} />
                        </div>
                      </div>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className={`px-6 pb-6 border-t ${divider} pt-4`}>
                        <ul className="space-y-2.5 mb-5">
                          {exp.bullets.map((b, i) => (
                            <li key={i} className={`flex gap-3 text-sm leading-relaxed ${bodyC}`}>
                              <span className="text-indigo-400 mt-1.5 shrink-0 text-base leading-none">›</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span key={tag} className={`text-xs border px-2.5 py-1 rounded-md ${tagBg}`}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Education */}
            <div className="relative pl-10">
              <div className={`absolute left-0 top-5 w-[15px] h-[15px] rounded-full border-2 ${isDark ? 'border-white/25' : 'border-gray-300'} ${dotBg}`} />
              <div className={`card-hover rounded-xl border ${cardBg} ${border} px-6 py-5 hover:border-indigo-400/30 transition-colors`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className={`font-semibold text-base ${titleC}`}>{education.degree}</h3>
                    <p className={`text-sm mt-0.5 ${bodyC}`}>{education.school}</p>
                  </div>
                  <span className={`text-xs shrink-0 ${subC}`}>{education.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {education.details.map((d) => (
                    <span key={d} className={`text-xs border px-2.5 py-1 rounded-md ${eduTag}`}>{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const SectionLabel: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">{text}</span>
  </div>
);

export default Experience;
