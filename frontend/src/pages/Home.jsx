import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center px-6 relative"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)",
        fontFamily: "'Poppins', 'Montserrat', sans-serif"
      }}
    >
      {/* Logo placeholder */}
      <div className="mb-12">
        <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white font-extrabold text-3xl shadow-2xl border-4 border-green-300/20 hover:scale-110 transition-transform duration-300 cursor-pointer">
          FC
        </div>
      </div>

      {/* Main headline */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center mb-6 leading-tight">
        <span className="text-white">Fresh Cuts.</span>
        <br />
        <span className="text-green-400">Clean Vibes.</span>
      </h1>

      {/* Subheadline */}
      <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 text-center mb-12 max-w-2xl leading-relaxed font-light">
        Book your next haircut with confidence.
      </p>

      {/* Book a Cut Button */}
      <Link
        to="booking"
        smooth={true}
        duration={800}
        offset={-80}
        className="inline-block py-4 px-10 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-xl shadow-2xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-400/50 transform hover:scale-105"
        style={{
          boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
        }}
      >
        Book a Cut
      </Link>
    </section>
  );
};

export default Home;
