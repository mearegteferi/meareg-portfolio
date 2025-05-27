import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

    const projects = [
    {
      title: "Project Title",
      description:
        "A short description that explains the purpose and key features of this project. It solves specific problems or brings value in a unique way.",
      demoLink: "#",
      repoLink: "#",
      image: "https://via.placeholder.com/600x400",
      delay: 200,
    },
    {
      title: "Another Project",
      description:
        "Another brief description of a different project, with a focus on its key technologies and features.",
      demoLink: "#",
      repoLink: "#",
      image: "https://via.placeholder.com/600x400",
      delay: 300,
    },
  ];
  
  return (
    <div id="projects" className="py-24  text-gray-600">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold text-[#0191ca] font-robotoSlab leading-tight mb-6">
            My Projects
          </h2>
          <p className="text-lg text-gray-600">
            These are the projects I’ve built, showcasing my growth as a developer and problem solver.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {/* Project 1 */}
          <div
            className="flex flex-col lg:flex-row items-center gap-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Project Image */}
            <div className="w-full lg:w-2/5 rounded-xl overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Project 1"
                className="w-full h-full object-cover transition-all transform hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="lg:w-3/5 text-center lg:text-left">
              <h3 className="text-xl font-bold text-[#00c4cc] mb-3">
                Project Title
              </h3>
              <p className="text-gray-600 mb-4">
                A short description that explains the purpose and key features of this project. It solves specific problems or brings value in a unique way.
              </p>
              <div className="flex justify-center lg:justify-start gap-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c4cc] hover:underline"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c4cc] hover:underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            className="flex flex-col lg:flex-row items-center gap-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Project Image */}
            <div className="w-full lg:w-2/5 rounded-xl overflow-hidden">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Project 2"
                className="w-full h-full object-cover transition-all transform hover:scale-105"
              />
            </div>

            {/* Project Details */}
            <div className="lg:w-3/5 text-center lg:text-left">
              <h3 className="text-xl font-bold text-[#00c4cc] mb-3">
                Another Project
              </h3>
              <p className="text-gray-600 mb-4">
                Another brief description of a different project, with a focus on its key technologies and features.
              </p>
              <div className="flex justify-center lg:justify-start gap-6">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c4cc] hover:underline"
                >
                  View Demo
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00c4cc] hover:underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
