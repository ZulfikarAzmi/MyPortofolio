import React from 'react';
import CertificationCard from '../components/CertificationCard';

import freecodecamp from '../assets/certifications/freecodecamp.png';

const Certifications = () => {
  const certifications = [
    {
      image: freecodecamp,
      title: 'Data Analyst with Python',
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400 text-white">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
