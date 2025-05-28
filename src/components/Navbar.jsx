import { useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#091b29] text-gray-300 h-20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="text-xl font-bold font-inter text-[#00c4cc]">Logo</div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`${baseLinkClass} ${
                activeSection === item.id ? activeLinkClass : ""
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* GitHub Button */}
        <div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0191ca] text-black font-semibold rounded-lg py-2 px-4 border-2 border-[#0191ca] hover:bg-transparent hover:text-[#0191ca] transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
