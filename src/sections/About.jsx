import React from "react";
import myPhoto from "../assets/hackathon1.jpg";

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
            About <span className="text-cyan-400">Me</span>
          </h2>
        </div>

        <div className="space-y-4">
          <p className="text-lg text-gray-300 leading-relaxed">
             I’m a vocational high school graduate majoring in Software Engineering (RPL). With a strong foundation in web development, I enjoy building clean, responsive, and user-friendly applications. I’m always excited to learn new things, collaborate with others, and grow through real-world experiences. Currently, I’m looking for opportunities to contribute, learn from industry professionals, and work on meaningful projects. Let’s build something cool together! 
          </p>
        </div>

       
        
      </div>
    </section>
  );
};

export default About;
