import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Zulfikar Azmi. All rights reserved.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/zulfikarazmi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zulfikar-azmi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
          {/* Tambah sosial media lain jika ada */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
