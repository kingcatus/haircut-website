import React from "react";

import haircut1 from "../assets/haircut1.jpg";

const Gallery = () => {
  return (
    <section id="gallery" className="min-h-screen bg-black text-white px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src={haircut1}
          alt="Haircut 1"
          className="rounded-lg object-cover shadow-md w-full h-64 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Gallery;
