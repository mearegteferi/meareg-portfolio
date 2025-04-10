import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFlag } from "react-icons/fa";

function About() {
  return (
    <div id="about" className="pt-24">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* About Me Text Section */}
        <div className="text-center text-white mb-16">
          <div className="text-5xl text-[#0191ca]  font-bold font-robotoSlab mb-6">About Me</div>
          <div className="text-lg text-gray-600 font-inter mb-10 max-w-3xl mx-auto">
            Hi, I'm Meareg Teferi, a passionate software engineer with a focus on creating dynamic and scalable web applications.
            My journey in technology began when I first encountered coding during my studies, and since then, I've been continuously
            learning and building projects that solve real-world problems.
          </div>

        </div>

        {/* Contact Info Section */}
        <div className="  py-8">
          <div className="text-center mb-8">
            <h3 className="text-[#0191ca] text-4xl font-bold">Contact Information</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            <div className="flex items-center gap-3 hover:text-[#0191ca] transition-all duration-300 ease-in-out">
              <FaGithub className="text-2xl text-[#0191ca]" />
              <a href="https://github.com/your-github" className="text-lg text-gray-600 hover:text-[#0191ca]" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div className="flex items-center gap-3 hover:text-[#0191ca] transition-all duration-300 ease-in-out">
              <FaTwitter className="text-2xl text-[#0191ca]" />
              <a href="https://twitter.com/your-twitter" className="text-lg text-gray-600 hover:text-[#0191ca]" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
            <div className="flex items-center gap-3 hover:text-[#0191ca] transition-all duration-300 ease-in-out">
              <FaLinkedin className="text-2xl text-[#0191ca]" />
              <a href="https://linkedin.com/in/your-linkedin" className="text-lg text-gray-600 hover:text-[#0191ca]" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="flex items-center gap-3 hover:text-[#0191ca] transition-all duration-300 ease-in-out">
              <FaWhatsapp className="text-2xl text-[#0191ca]" />
              <a href="https://wa.me/your-whatsapp" className="text-lg text-gray-600 hover:text-[#0191ca]" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
            <div className="flex items-center gap-3 hover:text-[#0191ca] transition-all duration-300 ease-in-out">
              <FaEnvelope className="text-2xl text-[#0191ca]" />
              <a href="mailto:meareg@example.com" className="text-lg text-gray-600 hover:text-[#0191ca]">Email</a>
            </div>
            <div className="flex items-center gap-3 hover:text-[#0191ca] transition-all duration-300 ease-in-out">
              <FaPhoneAlt className="text-2xl text-[#0191ca]" />
              <span className="text-lg text-gray-600">+251 911 234 567</span>
            </div>
            <div className="flex items-center gap-3 hover:text-[#0191ca] transition-all duration-300 ease-in-out">
              <FaMapMarkerAlt className="text-2xl text-[#0191ca]" />
              <span className="text-lg text-gray-600">Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex items-center gap-3 hover:text-[#0191ca] transition-all duration-300 ease-in-out">
              <FaFlag className="text-2xl text-[#0191ca]" />
              <span className="text-lg text-gray-600">Ethiopian</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
