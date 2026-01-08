import React from "react";

import wasteImg from "./assets/waste.png";
import restaurantImg from "./assets/restaurant.png";
import accountingImg from "./assets/restaurant.png";
import odooImg from "./assets/odoo.png";
import posImg from "./assets/pos.png";
import skillImg from "./assets/skill.png";
import ecommerceImg from "./assets/ecommerce.png";
import taskImg from "./assets/task.png";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Waste Management System – Mekelle City",
      badge: "Internship Project",
      description:
        "Developed during my internship at Mekelle University to support Mekelle City waste management operations, reporting, and administration.",
      image: wasteImg,
      stack: [
        "Django",
        "React",
        "Material UI",
        "Tailwind CSS",
        "Djoser",
        "PostgreSQL",
      ],
      github: "https://github.com/mearegteferi/waste-management",
      demo: "",
    },
    {
      title: "Sofi Restaurant Management System",
      badge: "Semester Project (Deployed)",
      description:
        "A deployed full-stack restaurant management system with menu handling, orders, and admin dashboards.",
      image: restaurantImg,
      stack: ["Node.js (Express)", "React", "Tailwind CSS", "MongoDB"],
      github: "https://github.com/mearegteferi/Sofi-Restaurant",
      demo: "https://sofi-restaurant.vercel.app/",
    },
    {
      title: "Odoo ERP Customization",
      badge: "ERP Project",
      description:
        "Fully customized Odoo modules including HR, Inventory, Purchase, Sales, and Manufacturing for Niyat Consultancy.",
      image: odooImg,
      stack: ["Odoo", "Python", "Javascript", "PostgreSQL"],
      github: "https://github.com/mearegteferi/odoo",
      demo: "",
    },
    {
      title: "Point of Sale (POS) System",
      badge: "Team Project",
      description:
        "Participated in building a POS system focusing on transaction flow, UI integration, and backend logic.",
      image: posImg,
      stack: ["Django", "JavaScript", "Bootstrap"],
      github: "",
      demo: "",
    },
    {
      title: "Task Management System (Jira-like)",
      badge: "Personal Project (Ongoing)",
      description:
        "A developer-focused task management tool inspired by Jira with projects, tasks, and workflows.",
      image: taskImg,
      stack: ["FastAPI", "React", "PostgreSQL"],
      github: "https://github.com/mearegteferi/task_management",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="w-full py-24 bg-[#030014]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Academic, professional, and personal work.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#0a0a1a] to-[#050510] border border-white/5 hover:border-purple-500/40 transition"
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                {p.badge}
              </span>

              {/* Image */}
              <div className="md:w-[35%]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 md:h-full object-cover rounded-xl border border-white/10"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] text-gray-300 bg-white/5 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-6">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      className="px-4 py-2 text-xs font-bold rounded-lg border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10"
                    >
                      Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      className="px-4 py-2 text-xs font-bold rounded-lg border border-white/20 text-gray-300 hover:text-white"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
