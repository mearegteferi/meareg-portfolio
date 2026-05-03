import React from 'react';
import { useTheme } from '../App';

const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bg      = isDark ? 'bg-[#13131c]'   : 'bg-[#f0f0f8]';
  const cardBg  = isDark ? 'bg-[#0e0e1a]'   : 'bg-white';
  const border  = isDark ? 'border-white/10' : 'border-gray-200';
  const titleC  = isDark ? 'text-white'      : 'text-gray-900';
  const bodyC   = isDark ? 'text-gray-400'   : 'text-gray-500';
  const emphC   = isDark ? 'text-gray-200 font-medium' : 'text-gray-800 font-medium';
  const factBg  = isDark ? 'bg-white/[0.04]' : 'bg-white';
  const labelC  = isDark ? 'text-gray-500'   : 'text-gray-400';
  const barBg   = isDark ? 'bg-white/8'      : 'bg-gray-200';
  const monoFg  = isDark ? 'text-gray-500'   : 'text-gray-400';

  return (
    <div id="about" className={`relative w-full py-24 px-4 ${bg} overflow-hidden transition-colors duration-300`}>
      <div className="ambient absolute top-1/2 right-0 -translate-y-1/2 w-[360px] h-[360px] rounded-full bg-indigo-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <SectionLabel text="About Me" isDark={isDark} />

          <h2 className={`text-3xl sm:text-4xl font-bold leading-tight ${titleC}`}>
            Backend Engineer with a{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Systems Mindset
            </span>
          </h2>

          <div className={`space-y-4 text-base leading-relaxed ${bodyC}`}>
            <p>
              I'm a backend-heavy software engineer based in Addis Ababa, Ethiopia. I specialize in
              building scalable, highly performant systems using{' '}
              <span className={emphC}>Clean Architecture</span> and{' '}
              <span className={emphC}>Domain-Driven Design</span>.
            </p>
            <p>
              My primary stack is{' '}
              <span className={emphC}>Python (FastAPI, Django)</span> on the backend and{' '}
              <span className={emphC}>React / Next.js</span> on the frontend. I'm passionate about
              async event-driven microservices and integrating AI Agents into production workflows.
            </p>
            <p>
              I graduated with a BSc in Software Engineering from Mekelle University (CGPA 3.81)
              and have since worked at two companies building production-grade systems.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <Fact label="Location" value="Addis Ababa, Ethiopia" factBg={factBg} border={border} labelC={labelC} titleC={titleC} />
            <Fact label="Degree"   value="BSc Software Engineering" factBg={factBg} border={border} labelC={labelC} titleC={titleC} />
            <Fact label="CGPA"     value="3.81 / 4.0" factBg={factBg} border={border} labelC={labelC} titleC={titleC} />
            <Fact label="Status"   value="Open to work" factBg={factBg} border={border} labelC={labelC} titleC={titleC} highlight />
          </div>
        </div>

        {/* Right: code window only */}
        <div className={`card-hover rounded-xl ${cardBg} border ${border} overflow-hidden shadow-xl ${isDark ? 'shadow-black/30' : 'shadow-gray-200/80'}`}>
          {/* Title bar */}
          <div className={`flex items-center gap-2 px-4 py-3 border-b ${border} ${isDark ? 'bg-white/[0.03]' : 'bg-gray-50'}`}>
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className={`ml-3 text-xs font-mono ${monoFg}`}>engineer.py</span>
          </div>

          {/* Code */}
          <div className="p-6 font-mono text-sm leading-7 overflow-x-auto">
            <p><span className="text-violet-400">class</span> <span className="text-yellow-500">MearegTeferi</span><span className={isDark ? 'text-gray-300' : 'text-gray-700'}>:</span></p>
            <p className="pl-6"><span className="text-violet-400">def</span> <span className="text-blue-400">__init__</span><span className={isDark ? 'text-gray-300' : 'text-gray-700'}>(self):</span></p>
            <p className="pl-12"><span className={isDark ? 'text-gray-300' : 'text-gray-600'}>self.</span><span className="text-cyan-500">role</span><span className={isDark ? 'text-gray-300' : 'text-gray-600'}> = </span><span className="text-emerald-500">"Backend Engineer"</span></p>
            <p className="pl-12"><span className={isDark ? 'text-gray-300' : 'text-gray-600'}>self.</span><span className="text-cyan-500">stack</span><span className={isDark ? 'text-gray-300' : 'text-gray-600'}> = [</span><span className="text-emerald-500">"FastAPI"</span><span className={isDark ? 'text-gray-300' : 'text-gray-600'}>, </span><span className="text-emerald-500">"Django"</span><span className={isDark ? 'text-gray-300' : 'text-gray-600'}>, </span><span className="text-emerald-500">"React"</span><span className={isDark ? 'text-gray-300' : 'text-gray-600'}>]</span></p>
            <p className="pl-12"><span className={isDark ? 'text-gray-300' : 'text-gray-600'}>self.</span><span className="text-cyan-500">arch</span><span className={isDark ? 'text-gray-300' : 'text-gray-600'}> = [</span><span className="text-emerald-500">"Clean Arch"</span><span className={isDark ? 'text-gray-300' : 'text-gray-600'}>, </span><span className="text-emerald-500">"DDD"</span><span className={isDark ? 'text-gray-300' : 'text-gray-600'}>]</span></p>
            <p className="pl-12"><span className={isDark ? 'text-gray-300' : 'text-gray-600'}>self.</span><span className="text-cyan-500">open_to_work</span><span className={isDark ? 'text-gray-300' : 'text-gray-600'}> = </span><span className="text-orange-400">True</span></p>
            <p className="mt-2 pl-6"><span className="text-violet-400">def</span> <span className="text-blue-400">build</span><span className={isDark ? 'text-gray-300' : 'text-gray-700'}>(self, problem):</span></p>
            <p className="pl-12"><span className="text-violet-400">return</span> <span className="text-emerald-500">"Scalable, maintainable solution"</span></p>
            <p className="pl-12 mt-1">
              <span className={isDark ? 'text-gray-600' : 'text-gray-400'}># always</span>
              <span className="cursor-blink text-indigo-400 ml-1">|</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

const SectionLabel: React.FC<{ text: string; isDark: boolean }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="h-px w-8 bg-gradient-to-r from-indigo-500 to-violet-500" />
    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">{text}</span>
  </div>
);

const Fact: React.FC<{
  label: string; value: string; highlight?: boolean;
  factBg: string; border: string; labelC: string; titleC: string;
}> = ({ label, value, highlight, factBg, border, labelC, titleC }) => (
  <div className={`card-hover p-3 rounded-lg ${factBg} border ${border} cursor-default`}>
    <p className={`text-xs uppercase tracking-wider ${labelC}`}>{label}</p>
    <p className={`text-sm font-semibold mt-1 ${highlight ? 'text-emerald-400' : titleC}`}>{value}</p>
  </div>
);

export default About;
