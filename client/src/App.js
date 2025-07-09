import React from 'react';
import logo from './logo.svg';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-pink-600">
      <div className="flex flex-col items-center px-4 w-full max-w-xl">
        <motion.img 
          src={logo} 
          alt="Logo" 
          className="w-32 h-32 mb-8 drop-shadow-lg"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold text-white text-center mb-6 font-[Montserrat,sans-serif]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
        >
          Fresh Cuts. Clean Vibes.
        </motion.h1>
        <motion.a
          href="/booking"
          className="mt-4 px-8 py-4 rounded-full bg-pink-500 text-white text-lg font-bold shadow-lg hover:bg-pink-400 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-pink-300"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          Book a Cut
        </motion.a>
      </div>
    </div>
  );
}

export default App;
