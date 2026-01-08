import React, { useState } from "react";

type Category = "Languages" | "Frameworks" | "Tools" | "Soft Skills";

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>("Languages");

  const categories: Category[] = ["Languages", "Frameworks", "Tools", "Soft Skills"];

  return (
    <div id="skills" className="w-full py-24 bg-[#030014] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Technologies and skills I actively use to build modern web applications.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mt-8 p-1.5 bg-white/5 border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === "Soft Skills" ? (
          <SoftSkillsGrid />
        ) : (
          <TechGrid category={activeTab} />
        )}
      </div>
    </div>
  );
};

/* ----------------- GRIDS ----------------- */

const TechGrid: React.FC<{ category: Category }> = ({ category }) => {
  const items = techData[category as keyof typeof techData];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <TechCard key={item.name} {...item} />
      ))}
    </div>
  );
};

const SoftSkillsGrid: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {softSkillsData.map((skill) => (
      <SoftSkillCard key={skill.title} {...skill} />
    ))}
  </div>
);

/* ----------------- CARDS ----------------- */

const TechCard: React.FC<{
  name: string;
  level: string;
  slug: string;
  color: string;
}> = ({ name, level, slug, color }) => {
  const iconUrl = `https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`;

  return (
    <div className="p-6 bg-[#0a0a1a] border border-white/5 rounded-2xl hover:border-purple-500/30 transition h-full">
      <div className="flex items-center gap-4 mb-4">
        <img src={iconUrl} alt={name} className="w-10 h-10" />
        <h3 className="text-lg font-bold text-white">{name}</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{level}</p>
    </div>
  );
};

const SoftSkillCard: React.FC<{ icon: string; title: string; desc: string }> = ({
  icon,
  title,
  desc,
}) => (
  <div className="p-6 bg-[#0a0a1a] border border-white/5 rounded-2xl hover:border-purple-500/30 transition h-full">
    <span className="material-symbols-outlined text-purple-400 text-3xl">
      {icon}
    </span>
    <h3 className="text-lg font-bold text-white mt-4 mb-2">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

/* ----------------- DATA ----------------- */

const techData = {
  Languages: [
    {
      name: "Python",
      slug: "python",
      color: "#3776AB",
      level: "Primary backend language for building APIs, business logic, and automation."
    },
    {
      name: "JavaScript",
      slug: "javascript",
      color: "#F7DF1E",
      level: "Used to create interactive and dynamic frontend behavior in React applications."
    },
    {
      name: "SQL",
      slug: "postgresql",
      color: "#4169E1",
      level: "Writing structured queries, joins, and data manipulation for relational databases."
    },
    {
      name: "HTML5",
      slug: "html5",
      color: "#E34F26",
      level: "Semantic markup for accessible and well-structured web pages."
    },
    {
      name: "CSS3",
      slug: "css",
      color: "#1572B6",
      level: "Styling responsive layouts using modern CSS techniques."
    },
    {
      name: "TypeScript",
      slug: "typescript",
      color: "#3178C6",
      level: "Improving JavaScript reliability through static typing in frontend projects."
    }
  ],

  Frameworks: [
    {
      name: "Django",
      slug: "django",
      color: "#092E20",
      level: "Developing full-stack web applications with authentication and business logic."
    },
    {
      name: "FastAPI",
      slug: "fastapi",
      color: "#009688",
      level: "Building high-performance asynchronous REST APIs."
    },
    {
      name: "React",
      slug: "react",
      color: "#61DAFB",
      level: "Creating reusable, component-based user interfaces."
    },
    {
      name: "Pydantic",
      slug: "pydantic",
      color: "#E92063",
      level: "Data validation and schema enforcement for backend APIs."
    },
    {
      name: "SQLAlchemy",
      slug: "sqlalchemy",
      color: "#D71F00",
      level: "ORM-based database modeling and query handling."
    },
    {
      name: "Alembic",
      slug: "alembic",
      color: "#4B8BBE",
      level: "Managing database migrations and schema version control."
    }
  ],

  Tools: [
    {
      name: "PostgreSQL",
      slug: "postgresql",
      color: "#4169E1",
      level: "Primary relational database used in production-ready applications."
    },
    {
      name: "Docker",
      slug: "docker",
      color: "#2496ED",
      level: "Containerizing applications for consistent development environments."
    },
    {
      name: "Git",
      slug: "git",
      color: "#F05032",
      level: "Version control for collaborative and structured development."
    },
    {
      name: "Playwright",
      slug: "playwright",
      color: "#2EAD33",
      level: "Automated end-to-end testing for frontend user flows."
    },
    {
      name: "Traefik",
      slug: "traefikproxy",
      color: "#24A1C1",
      level: "Reverse proxy and routing for Docker-based services."
    },
    {
      name: "PyCharm",
      slug: "pycharm",
      color: "#21D789",
      level: "Main IDE for Python development and debugging."
    }
  ]
};

const softSkillsData = [
  {
    icon: "record_voice_over",
    title: "Technical Communication",
    desc: "Explaining complex technical ideas clearly to both technical and non-technical audiences."
  },
  {
    icon: "groups",
    title: "Collaboration",
    desc: "Working effectively with designers, developers, and product teams."
  },
  {
    icon: "sync",
    title: "Agile Mindset",
    desc: "Comfortable working in iterative development and fast feedback cycles."
  },
  {
    icon: "psychology",
    title: "Problem Solving",
    desc: "Analyzing problems logically and implementing maintainable solutions."
  },
  {
    icon: "school",
    title: "Continuous Learning",
    desc: "Actively learning new tools and frameworks to improve development skills."
  },
  {
    icon: "slideshow",
    title: "Presentation Skills",
    desc: "Presenting technical work clearly during demos and reviews."
  }
];

export default Skills;
