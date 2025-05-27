import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
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
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-blue-50 via-white to-gray-100 text-gray-700"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0191ca] font-robotoSlab mb-4">
            My Projects
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            These are the projects I’ve built, showcasing my growth as a
            developer and problem solver.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              {/* Project Image */}
              <div className="w-full lg:w-2/5 overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-3/5 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-[#00c4cc] mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-center lg:justify-start gap-6 text-sm font-semibold">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0191ca] hover:text-[#016e95] transition-all"
                  >
                    🌐 View Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0191ca] hover:text-[#016e95] transition-all"
                  >
                    💻 GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
