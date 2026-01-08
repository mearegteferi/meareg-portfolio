import React from 'react';

const Experience: React.FC = () => {
  return (
    <div id="experience" className="w-full py-24 bg-[#05021c] relative">
      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black text-white">
            Career <span className="text-purple-400">Timeline</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My academic background and professional journey as a software developer.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent md:-translate-x-1/2 ml-4 md:ml-0 opacity-30"></div>

          <div className="space-y-12">

            {/* Niyat Consultancy */}
            <TimelineItem
              side="left"
              role="Software Developer"
              company="Niyat Consultancy"
              date="May 28, 2025 – Present"
              desc="Working on backend and frontend development for web applications. Building REST APIs, integrating frontend components, and collaborating with senior developers to deliver scalable and maintainable solutions."
              tags={["Python", "Django", "FastAPI", "React", "JavaScript"]}
            />

            {/* Digital Merkato */}
            <TimelineItem
              side="right"
              role="Software Developer"
              company="Digital Merkato Technology PLC"
              date="3 Months"
              desc="Contributed to backend and frontend development using Django. Built and styled user interfaces with HTML and CSS while assisting in implementing core web features."
              tags={["Python", "Django", "HTML", "CSS"]}
            />

            {/* Education */}
            <TimelineItem
              side="left"
              role="BSc in Software Engineering"
              company="Mekelle University"
              date="Graduated 2024"
              desc="Completed a Bachelor’s degree in Software Engineering with a strong academic record, gaining solid foundations in programming, software design, and problem-solving."
              tags={["GPA 3.81 / 4.0", "Software Engineering"]}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem: React.FC<{
  side: 'left' | 'right';
  role: string;
  company: string;
  date: string;
  desc: string;
  tags: string[];
}> = ({ side, role, company, date, desc, tags }) => {
  const isRight = side === 'right';

  return (
    <div
      className={`relative flex flex-col md:flex-row items-center ${
        isRight ? 'md:flex-row-reverse' : ''
      } gap-8`}
    >
      {/* Content Card */}
      <div className="flex-1 w-full ml-12 md:ml-0">
        <div
          className={`glass-panel p-6 rounded-2xl hover:border-cyan-500/50 transition-colors duration-300 relative group ${
            isRight ? 'md:text-right' : 'md:text-left'
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
            {role}
          </h3>
          <p className="text-purple-400 font-medium mb-1">{company}</p>
          <p className="text-gray-500 text-sm mb-2">{date}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">{desc}</p>

          <div
            className={`flex flex-wrap gap-2 ${
              isRight ? 'md:justify-end' : ''
            }`}
          >
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs font-semibold text-cyan-200 bg-cyan-900/30 px-2 py-1 rounded border border-cyan-500/20"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Arrow */}
          <div
            className={`hidden md:block absolute top-6 w-3 h-3 bg-[#1a1b2e] border-t border-r border-white/20 rotate-45 ${
              isRight
                ? '-left-[7px] border-r-0 border-t-0 border-l border-b'
                : '-right-[7px]'
            }`}
          ></div>
        </div>
      </div>

      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#030014] border-2 border-cyan-400 rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>

      {/* Spacer */}
      <div className="flex-1 hidden md:block"></div>
    </div>
  );
};

export default Experience;
