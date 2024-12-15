import React from 'react';
import myphoto from '../assets/myphoto.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-row items-center justify-between px-20 gap-x-2"
    >
      {/* Kiri - Teks */}
      <div className="text-left flex flex-col space-y-4">
        <h1 className="text-6xl font-bold text-cyan-400">
          Hello, I'm Zulfikar
        </h1>
        <p className="text-lg text-cyan-300">
          Web Developer | UI/UX Designer | Tech Enthusiast
        </p>
        <div>
          <button className="bg-cyan-400 text-black px-6 py-3 rounded-md shadow-md hover:bg-cyan-500 transition">
            Explore More
          </button>
        </div>
      </div>
      {/* Kanan - Gambar */}
      <div className="flex justify-center">
        <img
          src={myphoto}
          alt="Profile"
          className="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-cyan-400"
        />
      </div>
    </section>
  );
};

export default Hero;
