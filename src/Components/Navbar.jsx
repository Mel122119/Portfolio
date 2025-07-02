import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 font-sora">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          <span className="text-black text-xl font-bold md:block">Melat Amanuel</span>
        </NavLink>
        
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/about" className="text-black font-semibold">About Me</NavLink>
          <NavLink to="/skills" className="text-black font-semibold">Skills</NavLink>
          <NavLink to="/projects" className="text-black font-semibold">Projects</NavLink>
          <NavLink to="/contact" className="text-black font-semibold">Contact Me</NavLink>

          <a
            href="/resume.pdf"
            download="Melat_Amanuel_Resume.pdf"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Resume ⬇
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <NavLink to="/about" className="text-black font-semibold" onClick={() => setIsOpen(false)}>About Me</NavLink>
          <NavLink to="/skills" className="text-black font-semibold" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink to="/projects" className="text-black font-semibold" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" className="text-black font-semibold" onClick={() => setIsOpen(false)}>Contact Me</NavLink>

          <a
            href="/resume.pdf"
            download="Melat_Amanuel_Resume.pdf"
            className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition text-center"
          >
            Resume ⬇
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
