import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-black min-h-screen text-cyan-400 font-poppins">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="hero" className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold mb-4 text-cyan-400">Welcome to My Portfolio</h1>
          <p className="text-lg text-cyan-300">
            Explore my work, skills, and projects. Scroll down to learn more!
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 text-center">
          <h2 className="text-4xl font-semibold mb-6">About Me</h2>
          <p className="text-lg text-cyan-300 max-w-2xl mx-auto">
            I’m a web developer passionate about crafting dynamic and interactive experiences.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
