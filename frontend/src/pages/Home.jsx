import React from "react";
import { Link } from "react-scroll";

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
              <span className="text-green-400">Gallery</span> of Cuts
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
                className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-green-500/20 hover:border-green-400/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 text-green-400 group-hover:scale-110 transition-transform duration-300">
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
            Book Your <span className="text-green-400">Appointment</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready for a fresh cut? Schedule your appointment today and experience the difference.
          </p>

          {/* Booking Placeholder */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-green-500/20 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-6xl mb-6 text-green-400">📅</div>
              <h3 className="text-2xl font-bold text-white mb-4">Scheduling System</h3>
              <p className="text-gray-300 mb-6">
                Our online booking system is coming soon! For now, reach out directly to schedule your appointment.
              </p>
              <button className="inline-block py-3 px-8 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-lg transition-all duration-300 transform hover:scale-105">
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
            Why I <span className="text-green-400">Cut Hair</span>
          </h2>
          
          {/* Mission Content */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-green-500/20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-6xl mb-6 text-green-400">💈</div>
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
            Get In <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready for your next cut? Here's how to reach me.
          </p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Instagram */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border-2 border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="text-4xl mb-4 text-green-400">📱</div>
              <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
              <p className="text-gray-300 mb-4">@freshcuts_barber</p>
              <a 
                href="#" 
                className="inline-block py-2 px-4 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-sm transition-all duration-300"
              >
                Follow Me
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border-2 border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="text-4xl mb-4 text-green-400">📞</div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">(555) 123-4567</p>
              <a 
                href="tel:5551234567" 
                className="inline-block py-2 px-4 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-sm transition-all duration-300"
              >
                Call Now
              </a>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border-2 border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <div className="text-4xl mb-4 text-green-400">📍</div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-300 mb-4">123 Barber Street<br />City, State 12345</p>
              <a 
                href="#" 
                className="inline-block py-2 px-4 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-sm transition-all duration-300"
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
