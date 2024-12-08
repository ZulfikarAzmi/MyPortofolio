import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-cyan-400 font-extrabold text-2xl tracking-wide">
          MyPortfolio
        </div>
        
        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {["Home", "About", "Skills", "Projects", "Certifications", "Contact"].map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-cyan-400 hover:text-white transition duration-300 ease-in-out font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
