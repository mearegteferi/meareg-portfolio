import React, { useState } from 'react';
import { useTheme } from '../App';

type Tab = 'Backend' | 'Frontend' | 'Architecture' | 'Tools';
const tabs: Tab[] = ['Backend', 'Frontend', 'Architecture', 'Tools'];

const skillData: Record<Tab, { name: string; slug: string; color: string; note: string }[]> = {
  Backend: [
    { name: 'Python',     slug: 'python',     color: '3776AB', note: 'Primary language for all backend work' },
    { name: 'FastAPI',    slug: 'fastapi',     color: '009688', note: 'High-performance async REST APIs' },
    { name: 'Django',     slug: 'django',      color: '44B78B', note: 'Full-stack web apps and DRF APIs' },
    { name: 'PostgreSQL', slug: 'postgresql',  color: '4169E1', note: 'Primary relational database' },
    { name: 'Redis',      slug: 'redis',       color: 'DC382D', note: 'Caching and low-latency state management' },
    { name: 'RabbitMQ',   slug: 'rabbitmq',    color: 'FF6600', note: 'Event-driven async communication' },
    { name: 'SQLAlchemy', slug: 'sqlalchemy',  color: 'D71F00', note: 'ORM-based database modeling' },
    { name: 'Pydantic',   slug: 'pydantic',    color: 'E92063', note: 'Data validation and schema enforcement' },
    { name: 'MongoDB',    slug: 'mongodb',     color: '47A248', note: 'NoSQL document-based storage' },
    { name: 'Node.js',    slug: 'nodedotjs',   color: '339933', note: 'Express-based REST APIs' },
    { name: 'Odoo',       slug: 'odoo',        color: '714B67', note: 'ERP customization and module development' },
    { name: 'LangGraph',  slug: 'langchain',   color: '1C3C3C', note: 'Stateful multi-agent AI workflow orchestration' },
  ],
  Frontend: [
    { name: 'React',        slug: 'react',       color: '61DAFB', note: 'Component-based UI development' },
    { name: 'Next.js',      slug: 'nextdotjs',   color: '000000', note: 'SSR and full-stack React applications' },
    { name: 'TypeScript',   slug: 'typescript',  color: '3178C6', note: 'Static typing for reliable frontend code' },
    { name: 'JavaScript',   slug: 'javascript',  color: 'F7DF1E', note: 'Core language for frontend behavior' },
    { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4', note: 'Utility-first responsive styling' },
    { name: 'Redux',        slug: 'redux',       color: '764ABC', note: 'Centralized state management' },
  ],
  Architecture: [
    { name: 'Clean Architecture',   slug: '', color: '', note: 'Decoupled, layered system design' },
    { name: 'Domain-Driven Design', slug: '', color: '', note: 'Modeling complex business domains' },
    { name: 'Microservices',        slug: '', color: '', note: 'Distributed service-oriented systems' },
    { name: 'Event-Driven Arch.',   slug: '', color: '', note: 'Async, non-blocking communication' },
    { name: 'RESTful API Design',   slug: '', color: '', note: 'OpenAPI-standard API architecture' },
    { name: 'Repository Pattern',   slug: '', color: '', note: 'Abstracted data access layer' },
  ],
  Tools: [
    { name: 'Docker',         slug: 'docker',        color: '2496ED', note: 'Containerization and compose setups' },
    { name: 'Git',            slug: 'git',           color: 'F05032', note: 'Version control and branching' },
    { name: 'GitHub Actions', slug: 'githubactions', color: '2088FF', note: 'CI/CD pipeline automation' },
    { name: 'Nginx',          slug: 'nginx',         color: '009639', note: 'Web server and reverse proxy' },
    { name: 'Traefik',        slug: 'traefikproxy',  color: '24A1C1', note: 'Reverse proxy for Docker services' },
    { name: 'Pytest',         slug: 'pytest',        color: '0A9EDC', note: 'Backend unit and integration testing' },
    { name: 'Playwright',     slug: 'playwright',    color: '2EAD33', note: 'End-to-end frontend testing' },
    { name: 'Postman',        slug: 'postman',       color: 'FF6C37', note: 'API testing and documentation' },
  ],
};

const archEmoji: Record<string, string> = {
  'Clean Architecture':   '🏛️',
  'Domain-Driven Design': '🧩',
  'Microservices':        '🔗',
  'Event-Driven Arch.':   '⚡',
  'RESTful API Design':   '🌐',
  'Repository Pattern':   '📦',
};

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [active, setActive] = useState<Tab>('Backend');

  const bg       = isDark ? 'bg-[#111118]'   : 'bg-[#f8f8fc]';
  const cardBg   = isDark ? 'bg-[#16161f]'   : 'bg-white';
  const border   = isDark ? 'border-white/8' : 'border-gray-200';
  const titleC   = isDark ? 'text-white'     : 'text-gray-900';
  const noteC    = isDark ? 'text-gray-500'  : 'text-gray-400';
  const subC     = isDark ? 'text-gray-500'  : 'text-gray-400';

  return (
    <div id="skills" className={`relative w-full py-24 px-4 ${bg} overflow-hidden transition-colors duration-300`}>
      <div className="ambient absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-indigo-600/10 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        <div className="mb-12">
          <SectionLabel text="Skills" />
          <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${titleC}`}>Technical Expertise</h2>
          <p className={`mt-2 text-sm ${subC}`}>Technologies, frameworks, and patterns I work with.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === tab
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : isDark
                  ? 'bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
                  : 'bg-white text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-300 shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillData[active].map((item, idx) => (
            <div
              key={item.name}
              className={`card-hover flex items-center gap-4 p-4 rounded-xl ${cardBg} border ${border} hover:border-indigo-500/35`}
              style={{ animationDelay: `${idx * 0.04}s` }}
            >
              {active === 'Architecture' ? (
                <span className="text-2xl w-8 text-center shrink-0">{archEmoji[item.name]}</span>
              ) : (
                <img
                  src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
                  alt={item.name}
                  className="w-8 h-8 shrink-0"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              )}
              <div>
                <p className={`text-sm font-semibold ${titleC}`}>{item.name}</p>
                <p className={`text-xs mt-0.5 leading-relaxed ${noteC}`}>{item.note}</p>
              </div>
            </div>
          ))}
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

export default Skills;
