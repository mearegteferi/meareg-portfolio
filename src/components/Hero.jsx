import { FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import person from "../assets/person.png";
import { Link } from "react-router";

function Hero() {
  return (
    <>
      <div className="flex justify-between mb-2  bg-[#091b29]">
        <div className="flex flex-col w-[600px] ml-28 mt-32">
          <div className="text-5xl font-bold text-white font-robotoSlab mb-4">
            Hi, I am Meareg Teferi
          </div>
          <div className="font-bold text-2xl font-robotoSlab text-[#0191ca] mb-8">
            Software Engineer
          </div>
          <div className="text-slate-300 font-inter font-bold leading-7">
            i can develop with different languages and can create fully
            functional softwares such as websites and standalone applications. i
            can develop with different languages.
          </div>
          <div className="flex mt-8">
            <Link to="/skills">
            <button className="py-2 px-8 border-[#0191ca] border-2 rounded-lg mr-12 font-robotoSlab font-bold 
            bg-[#0191ca] hover:bg-transparent hover:text-[#0191ca] transition-all duration-300 ease-in-out">
              Skills
            </button>
            </Link>
            <button className="py-2 px-6 border-[#0191ca] border-2 rounded-lg mr-12 font-robotoSlab  
            text-[#0191ca] hover:bg-[#0191ca] hover:text-black transition-all duration-300 ease-in-out">
              Learn More
            </button>
          </div>
          <div className="flex gap-4 mt-20 mb-10">
            <div className="p-2 border-[#0191ca] border-2 rounded-full text-[#0191ca] text-sm hover:bg-[#0191ca] hover:text-black transition-all duration-300 ease-in-out">
              <FaTwitter />
            </div>
            <div className="p-2 border-[#0191ca] border-2 rounded-full text-[#0191ca] text-sm hover:bg-[#0191ca] hover:text-black transition-all duration-300 ease-in-out">
              <FaLinkedin />
            </div>
            <div className="p-2 border-[#0191ca] border-2 rounded-full text-[#0191ca] text-sm hover:bg-[#0191ca] hover:text-black transition-all duration-300 ease-in-out">
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <div className="mt-20 mr-10 ">
          <img className="h-[400px] w-[400px]" src={person} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;
