import { useState } from "react";


function Navbar() {

  const [activeSection, setActiveSection] = useState(null)

  const handleLinkClick = (section) => {
    setActiveSection(section)
  }

    const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
    { name: "About", href: "#about", id: "about" },
  ];

  const baseLinkClass = "mt-6 text-sm font-robotoSlab transition-all duration-300 ease-in-out";
  const activeLinkClass = "py-2 px-3 border border-[#0191ca] rounded-lg text-[#0191ca] hover:bg-[#0191ca] hover:text-black";

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#091b29] text-gray-300 h-20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="text-xl font-bold font-inter text-[#00c4cc]">Logo</div>
          <a href="#home"
            className={activeSection == "home" 
                ? "py-2 px-3 mt-4 border-[#0191ca] border-[1px] rounded-lg mr-2 font-robotoSlab text-[#0191ca] hover:bg-[#0191ca] hover:text-black transition-all duration-300 ease-in-out"
                : "mt-6"
            }
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a
            href="#projects"
            className={activeSection == "projects" 
                ? "py-2 px-3 mt-4 border-[#0191ca] border-[1px] rounded-lg mr-2 font-robotoSlab text-[#0191ca] hover:bg-[#0191ca] hover:text-black transition-all duration-300 ease-in-out"
                : "mt-6"
            }
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={activeSection == "skills" 
                ? "py-2 px-3 mt-4 border-[#0191ca] border-[1px] rounded-lg mr-2 font-robotoSlab text-[#0191ca] hover:bg-[#0191ca] hover:text-black transition-all duration-300 ease-in-out"
                : "mt-6"
            }
            onClick={() => handleLinkClick("exprience")}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={activeSection == "contact" 
                ? "py-2 px-3 mt-4 border-[#0191ca] border-[1px] rounded-lg mr-2 font-robotoSlab text-[#0191ca] hover:bg-[#0191ca] hover:text-black transition-all duration-300 ease-in-out"
                : "mt-6"
            }
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </a>
          <a
            href="#about"
            className={activeSection == "about" 
                ? "py-2 px-3 mt-4 border-[#0191ca] border-[1px] rounded-lg mr-2 font-robotoSlab text-[#0191ca] hover:bg-[#0191ca] hover:text-black transition-all duration-300 ease-in-out"
                : "mt-6"
            }
            onClick={() => handleLinkClick("about")}
          >
            About
          </a>
        </div>
        <div>
          <button className="mt-4 bg-[#0191ca] text-black border-2 border-[#0191ca] rounded-lg py-2 px-4 mr-16">
            Github
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
