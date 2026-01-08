import React from 'react';

const About: React.FC = () => {
    return (
        <div id="about" className="w-full py-24 px-4 bg-[#030014] overflow-hidden relative">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left: Creative "IDE" Window */}
                <div className="flex justify-center w-full">
                    <div className="relative w-full max-w-md lg:max-w-full">
                        {/* Glow Effect behind the window */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl opacity-30 blur-lg animate-pulse-slow"></div>

                        {/* The Code Window */}
                        <div className="relative rounded-xl bg-[#0a0a1a] border border-white/10 shadow-2xl overflow-hidden group hover:border-white/20 transition-colors duration-300">

                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                <div className="text-xs text-gray-500 font-mono">about_me.ts</div>
                                <div className="w-8"></div> {/* Spacer for centering */}
                            </div>

                            {/* Code Content */}
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-sm leading-relaxed">
                                    <code className="block">
                                        <span className="text-purple-400">const</span> <span className="text-yellow-200">Engineer</span> <span className="text-white">=</span> <span className="text-white">{`{`}</span>
                                    </code>
                                    <code className="block pl-4">
                                        <span className="text-cyan-400">name</span>: <span className="text-green-300">"Meareg Teferi"</span>,
                                    </code>
                                    <code className="block pl-4">
                                        <span className="text-cyan-400">traits</span>: <span className="text-white">[</span>
                                        <span className="text-green-300">"Creative"</span>, <span className="text-green-300">"Logical"</span><span className="text-white">]</span>,
                                    </code>
                                    <code className="block pl-4">
                                        <span className="text-cyan-400">codes</span>: <span className="text-purple-400">true</span>,
                                    </code>
                                    <code className="block pl-4">
                                        <span className="text-cyan-400">coffeeLevel</span>: <span className="text-orange-400">Infinity</span>,
                                    </code>
                                    <code className="block pl-4">
                                        <span className="text-cyan-400">building</span>: <span className="text-white">(</span><span className="text-white">)</span> <span className="text-purple-400">=&gt;</span> <span className="text-white">{`{`}</span>
                                    </code>
                                    <code className="block pl-8">
                                        <span className="text-purple-400">return</span> <span className="text-green-300">"Scalable Solutions"</span>;
                                    </code>
                                    <code className="block pl-4">
                                        <span className="text-white">{`}`}</span>
                                    </code>
                                    <code className="block">
                                        <span className="text-white">{`};`}</span>
                                    </code>
                                </pre>
                            </div>

                            {/* Cursor Animation */}
                            <div className="absolute bottom-6 right-8 w-2 h-4 bg-cyan-400 animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Right: Text Content */}
                <div className="flex flex-col gap-8 lg:pl-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-12 bg-purple-500"></div>
                            <p className="text-purple-400 font-bold tracking-widest uppercase text-sm">About Me</p>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                            More Than Just <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Syntax & Logic</span>
                        </h2>
                    </div>

                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I’m a software engineer with a strong focus on backend development and modern web technologies. I enjoy building reliable APIs and web applications using Python, Django, FastAPI, and React.
                        </p>
                        <p>
                            My strength lies in turning real-world requirements into clean, maintainable systems. I value readable code, thoughtful architecture, and continuous learnings.
                        </p>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <FeatureBox icon="code_blocks" title="Clean Code" desc="Maintainable & Scalable" />
                        <FeatureBox icon="rocket_launch" title="Performance" desc="Optimized for Speed" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const FeatureBox: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1">
        <div className="w-10 h-10 rounded-lg bg-[#0a0a1a] flex items-center justify-center border border-white/10 shrink-0">
            <span className="material-symbols-outlined text-purple-400 text-xl">{icon}</span>
        </div>
        <div>
            <h3 className="text-white text-base font-bold mb-1">{title}</h3>
            <p className="text-gray-500 text-sm">{desc}</p>
        </div>
    </div>
);

export default About;