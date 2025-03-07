import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from "./sections/Skills";
import About from './sections/About';
const App = () => {
  return (
    <div className="bg-black min-h-screen text-cyan-400 font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default App;
