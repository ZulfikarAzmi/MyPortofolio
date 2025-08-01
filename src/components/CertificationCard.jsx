import React, { useState } from 'react';

const CertificationCard = ({ image, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail */}
      <div
        className="cursor-pointer group relative overflow-hidden rounded-2xl shadow-md hover:shadow-cyan-500/30 transition"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Modal (Zoom View) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={image}
            alt={title}
            className="max-w-full max-h-[90vh] object-contain rounded-xl"
          />
        </div>
      )}
    </>
  );
};

export default CertificationCard;
