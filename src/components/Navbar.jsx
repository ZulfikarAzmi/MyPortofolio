import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Certifications",
    "Contact",
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-xl border-b border-cyan-800/30">
      <div className="container mx-auto flex justify-between items-center p-4 relative">
        {/* Logo */}
        <div className="text-cyan-400 font-bold text-2xl tracking-wide flex items-center space-x-2">
          <span>Zulfikar Azmi</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-cyan-300 hover:text-white transition duration-300 ease-in-out font-medium relative group"
                >
                  {item}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 ml-6">
            <a
              href="https://github.com/ZulfikarAzmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white transition duration-300"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/zulfikarazmi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white transition duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-cyan-400 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 md:hidden shadow-lg border-t border-cyan-800/30">
            <ul className="flex flex-col items-center space-y-4 py-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-cyan-300 hover:text-white transition duration-300 ease-in-out font-medium"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                </li>
              ))}
              {/* Social Icons Mobile */}
              <div className="flex space-x-6 pt-4">
                <a
                  href="https://github.com/ZulfikarAzmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-white transition duration-300"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/zulfikarazmi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-white transition duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
