import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillCards = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Material-UI"],
      level: 5,
      delay: 200,
    },
    {
      title: "Backend",
      skills: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js"],
      level: 4,
      delay: 300,
    },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
      level: 4,
      delay: 400,
    },
    {
      title: "Tools",
      skills: ["Git & GitHub", "VS Code", "Postman", "Docker", "Figma"],
      level: 5,
      delay: 500,
    },
    {
      title: "Other Skills",
      skills: ["API Design", "Agile Development", "Problem-Solving", "Unit Testing"],
      level: 4,
      delay: 600,
    },
  ];

  const renderStars = (count) => "🌟".repeat(count);

  return (
    <div
      id="skills"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0191ca] font-robotoSlab mb-4 tracking-tight">
            My Skills
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl font-inter leading-relaxed max-w-2xl mx-auto">
            I specialize in crafting exceptional web applications using modern
            tools and technologies. Explore the pillars of my expertise in
            development and design.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCards.map(({ title, skills, level, delay }, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-md p-6 hover:bg-[#0191ca] hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <h3 className="text-xl font-bold text-[#0191ca] group-hover:text-white mb-4">
                {title}
              </h3>
              <ul className="text-gray-700 group-hover:text-gray-100 text-sm space-y-2">
                {skills.map((skill, idx) => (
                  <li key={idx} className="pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-[#0191ca] group-hover:before:text-white">
                    {skill}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-3 right-4 text-xs text-gray-400 group-hover:text-gray-200 font-semibold tracking-wider">
                Expertise: {renderStars(level)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
