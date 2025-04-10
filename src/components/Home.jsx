import { FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import person from "../assets/person.png";
import { Link } from "react-router";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";

function Header() {
  return (
    <div id="home">
    <Hero />
    <About />
    <Skills />
    <Projects />
    </div>
  );
}

export default Header;
