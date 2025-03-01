import React from "react";
import myPhoto from "../assets/portophoto.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-16 px-6 lg:px-20 bg-gradient-to-br from-gray-900 to-cyan-900 
                 flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-16"
    >
      {/* Bagian Gambar */}
      <div className="w-full lg:w-1/3 flex justify-center">
        <div className="relative group">
          {/* Background glow effect */}
          <div
            className="absolute -inset-4 bg-cyan-500 rounded-xl 
                          opacity-50 blur-xl group-hover:opacity-75 
                          transition duration-500 ease-in-out"
          ></div>

          {/* Foto profil */}
          <img
            src={myPhoto}
            alt="Zulfikar"
            className="relative z-10 w-80 h-80 rounded-xl object-cover 
                       shadow-2xl border-4 border-cyan-400 
                       transform transition duration-500 
                       group-hover:scale-105 group-hover:rotate-2"
          />

          {/* Overlay effect */}
          <div
            className="absolute inset-0 bg-cyan-500 opacity-0 
                          group-hover:opacity-20 rounded-xl 
                          transition duration-500 ease-in-out"
          ></div>
        </div>
      </div>

      {/* Bagian Deskripsi */}
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white"
          >
            Tentang <span className="text-cyan-400">Saya</span>
          </h2>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-300 leading-relaxed">
          Saya adalah pelajar yang sedang mendalami backend development dan data, dengan fokus pada teknologi seperti Laravel, Node.js, serta pengelolaan database. Saya tertarik memahami cara kerja sistem di balik layar dan bagaimana data dapat diolah menjadi informasi yang bernilai.
          </p>
        </div>

        {/* Tombol Skills */}
        <div className="flex justify-center lg:justify-start space-x-4">
          <button
            className="bg-cyan-500 text-white px-8 py-3 
                             rounded-full shadow-lg hover:bg-cyan-600 
                             transition transform hover:scale-105 
                             focus:outline-none focus:ring-2 
                             focus:ring-cyan-400 focus:ring-opacity-50"
          >
            Lihat Skills
          </button>
          <button
            className="border-2 border-cyan-500 text-cyan-500 
                             px-8 py-3 rounded-full hover:bg-cyan-500 
                             hover:text-white transition transform 
                             hover:scale-105 focus:outline-none"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
