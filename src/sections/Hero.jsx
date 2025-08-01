import React from "react";
import myphoto from "../assets/myphoto.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
                 px-6 md:px-20 py-16 bg-gradient-to-br from-gray-900 to-cyan-900"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0 md:space-x-16">
        {/* Teks Bagian Kiri */}
        <div className="text-center md:text-left flex-1 space-y-6">
          <div className="overflow-hidden">
            <h1
              className="text-4xl md:text-6xl font-bold text-white 
                           transform transition-transform duration-700 
                           translate-y-0 hover:-translate-y-2"
            >
              Hello, I'm <span className="text-cyan-400">Zulfikar</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl">
            I’m a vocational high school graduate majoring in Software Engineering (RPL), currently seeking opportunities to collaborate and grow as a Junior Web Developer.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <button
              className="bg-cyan-500 text-white px-8 py-3 
                               rounded-full shadow-lg hover:bg-cyan-600 
                               transition transform hover:scale-105 
                               focus:outline-none focus:ring-2 
                               focus:ring-cyan-400 focus:ring-opacity-50"
            >
              Explore More
            </button>
            <button
              className="border-2 border-cyan-500 text-cyan-500 
                               px-8 py-3 rounded-full hover:bg-cyan-500 
                               hover:text-white transition transform 
                               hover:scale-105 focus:outline-none"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Gambar Profil Bagian Kanan */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div
              className="absolute -inset-2 bg-cyan-400 rounded-full 
                            opacity-60 blur-xl animate-pulse"
            ></div>
            <img
              src={myphoto}
              alt="Profile"
              className="relative w-64 h-64 md:w-80 md:h-80 
                         rounded-full object-cover z-10 
                         border-4 border-cyan-400 
                         shadow-2xl transform transition 
                         hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
