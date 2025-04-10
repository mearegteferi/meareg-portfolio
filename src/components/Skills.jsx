import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

function Skills() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="skills" className="py-24 bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Skills Header */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#0191ca] font-robotoSlab leading-tight mb-6">
            My Skills
          </h2>
          <p className="text-gray-600 font-inter text-lg lg:text-xl leading-7 max-w-3xl mx-auto">
            I specialize in crafting exceptional web applications using modern
            tools and technologies. Explore the pillars of my expertise in
            development and design.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Frontend */}
          <div
            className="relative bg-white rounded-xl shadow-lg p-6 hover:bg-[#0191ca] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-bold text-[#0191ca] hover:text-white mb-4">
              Frontend
            </h3>
            <ul className="text-gray-700 hover:text-gray-100 text-sm space-y-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Material-UI</li>
            </ul>
            <div className="absolute bottom-2 right-2 text-sm text-gray-400 hover:text-gray-200">
              Expertise Level: 🌟🌟🌟🌟🌟
            </div>
          </div>

          {/* Backend */}
          <div
            className="relative bg-white rounded-xl shadow-lg p-6 hover:bg-[#0191ca] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-bold text-[#0191ca] hover:text-white mb-4">
              Backend
            </h3>
            <ul className="text-gray-700 hover:text-gray-100 text-sm space-y-2">
              <li>Python</li>
              <li>Django</li>
              <li>Django REST Framework</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
            <div className="absolute bottom-2 right-2 text-sm text-gray-400 hover:text-gray-200">
              Expertise Level: 🌟🌟🌟🌟
            </div>
          </div>

          {/* Database */}
          <div
            className="relative bg-white rounded-xl shadow-lg p-6 hover:bg-[#0191ca] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-xl font-bold text-[#0191ca] hover:text-white mb-4">
              Database
            </h3>
            <ul className="text-gray-700 hover:text-gray-100 text-sm space-y-2">
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>SQLite</li>
            </ul>
            <div className="absolute bottom-2 right-2 text-sm text-gray-400 hover:text-gray-200">
              Expertise Level: 🌟🌟🌟🌟
            </div>
          </div>

          {/* Tools */}
          <div
            className="relative bg-white rounded-xl shadow-lg p-6 hover:bg-[#0191ca] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <h3 className="text-xl font-bold text-[#0191ca] hover:text-white mb-4">
              Tools
            </h3>
            <ul className="text-gray-700 hover:text-gray-100 text-sm space-y-2">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Docker</li>
              <li>Figma</li>
            </ul>
            <div className="absolute bottom-2 right-2 text-sm text-gray-400 hover:text-gray-200">
              Expertise Level: 🌟🌟🌟🌟🌟
            </div>
          </div>

          {/* Other Skills */}
          <div
            className="relative bg-white rounded-xl shadow-lg p-6 hover:bg-[#0191ca] hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h3 className="text-xl font-bold text-[#0191ca] hover:text-white mb-4">
              Other Skills
            </h3>
            <ul className="text-gray-700 hover:text-gray-100 text-sm space-y-2">
              <li>API Design</li>
              <li>Agile Development</li>
              <li>Problem-Solving</li>
              <li>Unit Testing</li>
            </ul>
            <div className="absolute bottom-2 right-2 text-sm text-gray-400 hover:text-gray-200">
              Expertise Level: 🌟🌟🌟🌟
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
