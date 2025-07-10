import React from "react";
import { Link } from "react-scroll";

const PRIMARY_BLUE = "#0033A0";
const HOVER_BLUE = "#1a4db3"; // Tailwind's blue-700 is close

const Home = () => {
  return (
    <div className="w-full">
      {/* Homepage Section */}
      <section
        id="home"
        className="min-h-screen w-full flex flex-col justify-center items-center px-6 relative"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)",
          fontFamily: "'Poppins', 'Montserrat', sans-serif"
        }}
      >
        {/* Logo placeholder */}
        <div className="mb-12">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-extrabold text-3xl shadow-2xl border-4 border-blue-900/20 hover:scale-110 transition-transform duration-300 cursor-pointer"
            style={{ background: PRIMARY_BLUE, borderColor: PRIMARY_BLUE }}>
            BC
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center mb-6 leading-tight">
          <span className="text-white">BeyondCuts</span>
          <br />
          <span style={{ color: PRIMARY_BLUE }}>Fresh Cuts. Clean Vibes.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 text-center mb-12 max-w-2xl leading-relaxed font-light">
          Book your next haircut with confidence at <span className="font-bold" style={{ color: PRIMARY_BLUE }}>BeyondCuts</span>.
        </p>

        {/* Book a Cut Button */}
        <Link
          to="booking"
          smooth={true}
          duration={800}
          offset={-80}
          className="inline-block py-4 px-10 rounded-full text-white font-bold text-xl shadow-2xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-800/50 transform hover:scale-105"
          style={{
            background: PRIMARY_BLUE,
            boxShadow: `0 0 20px ${PRIMARY_BLUE}33`,
          }}
          onMouseOver={e => e.currentTarget.style.background = HOVER_BLUE}
          onMouseOut={e => e.currentTarget.style.background = PRIMARY_BLUE}
        >
          Book a Cut
        </Link>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
          fontFamily: "'Poppins', 'Montserrat', sans-serif"
        }}
      >
        <div className="max-w-6xl w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              <span style={{ color: PRIMARY_BLUE }}>Gallery</span> of Cuts
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Check out some of my latest work and transformations
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 hover:border-blue-700 transition-all duration-300 cursor-pointer group"
                style={{ borderColor: PRIMARY_BLUE }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4" style={{ color: PRIMARY_BLUE }}>
                      ✂️
                    </div>
                    <p className="text-gray-400 font-medium">Haircut #{item}</p>
                    <p className="text-sm text-gray-500">Click to view</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section
        id="booking"
        className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)",
          fontFamily: "'Poppins', 'Montserrat', sans-serif"
        }}
      >
        <div className="max-w-4xl w-full text-center">
          {/* Section Header */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Book Your <span style={{ color: PRIMARY_BLUE }}>Appointment</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready for a fresh cut? Schedule your appointment today and experience the difference.
          </p>

          {/* Booking Placeholder */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 max-w-2xl mx-auto"
            style={{ borderColor: PRIMARY_BLUE }}>
            <div className="text-center">
              <div className="text-6xl mb-6" style={{ color: PRIMARY_BLUE }}>📅</div>
              <h3 className="text-2xl font-bold text-white mb-4">Scheduling System</h3>
              <p className="text-gray-300 mb-6">
                Our online booking system is coming soon! For now, reach out directly to schedule your appointment.
              </p>
              <button className="inline-block py-3 px-8 rounded-full text-white font-bold text-lg transition-all duration-300 transform hover:scale-105"
                style={{ background: PRIMARY_BLUE }}
                onMouseOver={e => e.currentTarget.style.background = HOVER_BLUE}
                onMouseOut={e => e.currentTarget.style.background = PRIMARY_BLUE}
              >
                Contact to Book
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section
        id="why"
        className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)",
          fontFamily: "'Poppins', 'Montserrat', sans-serif"
        }}
      >
        <div className="max-w-4xl w-full text-center">
          {/* Section Header */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Why I <span style={{ color: PRIMARY_BLUE }}>Cut Hair</span>
          </h2>
          
          {/* Mission Content */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 max-w-3xl mx-auto"
            style={{ borderColor: PRIMARY_BLUE }}>
            <div className="text-center">
              <div className="text-6xl mb-6" style={{ color: PRIMARY_BLUE }}>💈</div>
              <h3 className="text-2xl font-bold text-white mb-6">My Mission & Passion</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I believe that a great haircut is more than just trimming hair – it's about confidence, 
                self-expression, and feeling your best. Every client who sits in my chair becomes part 
                of my story, and I take pride in delivering not just a cut, but an experience that 
                leaves you feeling fresh, confident, and ready to take on the world.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With years of experience and a passion for the craft, I've dedicated myself to mastering 
                the art of cutting hair. From classic styles to modern trends, I'm here to help you 
                discover and maintain the look that represents who you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Info Section */}
      <section
        id="info"
        className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)",
          fontFamily: "'Poppins', 'Montserrat', sans-serif"
        }}
      >
        <div className="max-w-4xl w-full text-center">
          {/* Section Header */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
            Get In <span style={{ color: PRIMARY_BLUE }}>Touch</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready for your next cut? Here's how to reach me.
          </p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Instagram */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border-2 hover:border-blue-700 transition-all duration-300"
              style={{ borderColor: PRIMARY_BLUE }}>
              <div className="text-4xl mb-4" style={{ color: PRIMARY_BLUE }}>📸</div>
              <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
              <p className="text-gray-300 mb-4">@joniiiglenn</p>
              <a 
                href="https://instagram.com/joniiiglenn" 
                target="_blank" rel="noopener noreferrer"
                className="inline-block py-2 px-4 rounded-full text-white font-bold text-sm transition-all duration-300"
                style={{ background: PRIMARY_BLUE }}
                onMouseOver={e => e.currentTarget.style.background = HOVER_BLUE}
                onMouseOut={e => e.currentTarget.style.background = PRIMARY_BLUE}
              >
                Follow Me
              </a>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border-2 hover:border-blue-700 transition-all duration-300"
              style={{ borderColor: PRIMARY_BLUE }}>
              <div className="text-4xl mb-4" style={{ color: PRIMARY_BLUE }}>✉️</div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-4">jonmichaelglenn@gmail.com</p>
              <a 
                href="mailto:jonmichaelglenn@gmail.com" 
                className="inline-block py-2 px-4 rounded-full text-white font-bold text-sm transition-all duration-300"
                style={{ background: PRIMARY_BLUE }}
                onMouseOver={e => e.currentTarget.style.background = HOVER_BLUE}
                onMouseOut={e => e.currentTarget.style.background = PRIMARY_BLUE}
              >
                Email Me
              </a>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border-2 hover:border-blue-700 transition-all duration-300"
              style={{ borderColor: PRIMARY_BLUE }}>
              <div className="text-4xl mb-4" style={{ color: PRIMARY_BLUE }}>📍</div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300 mb-4">Dillard University<br />2601 Gentilly Blvd<br />New Orleans, LA 70122</p>
              <a 
                href="https://maps.app.goo.gl/2Qw2Qw2Qw2Qw2Qw2A" 
                target="_blank" rel="noopener noreferrer"
                className="inline-block py-2 px-4 rounded-full text-white font-bold text-sm transition-all duration-300"
                style={{ background: PRIMARY_BLUE }}
                onMouseOver={e => e.currentTarget.style.background = HOVER_BLUE}
                onMouseOut={e => e.currentTarget.style.background = PRIMARY_BLUE}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
