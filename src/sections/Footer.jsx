import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} Zulfikar Azmi
        </p>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zazmialghifari@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/zulfikarazmi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/zulfikar-azmi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
