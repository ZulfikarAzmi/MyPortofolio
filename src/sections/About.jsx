import React from 'react';
import examplePhoto from '../assets/example.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-8 lg:px-20 flex flex-col lg:flex-row-reverse items-center justify-between gap-8"
    >
      {/* Kanan - Deskripsi */}
      <div className="flex flex-col space-y-4 max-w-lg">
        <h2 className="text-4xl font-semibold text-cyan-400">Tentang Saya</h2>
        <p className="text-lg text-cyan-300">
          Saya Zulfikar, pelajar SMK yang sedang belajar web development. Saya tertarik membuat website yang responsif dan interaktif menggunakan teknologi terbaru.
        </p>
        <p className="text-lg text-cyan-300">
          Fokus saya adalah pengembangan front-end dan desain UI/UX, serta terus belajar untuk menjadi pengembang web yang lebih baik.
        </p>
      </div>

      {/* Kiri - Gambar */}
      <div className="flex justify-center">
        <img
          src={examplePhoto}
          alt="Zulfikar"
          className="w-72 h-72 rounded-lg object-cover shadow-lg border-4 border-cyan-400"
        />
      </div>
    </section>
  );
};

export default About;
