import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from "./sections/Skills";
import About from './sections/About';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
const App = () => {
  return (
    <div className="bg-black min-h-screen text-cyan-400 font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
