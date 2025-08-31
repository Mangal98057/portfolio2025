import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react"; // download icon

function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-6 py-12 relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-3xl w-full text-center relative z-10">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent mb-4"
        >
          My Resume
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 mb-10 text-base sm:text-lg"
        >
          Explore my professional experience and download a copy of my resume.
        </motion.p>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative group bg-gray-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-lg overflow-hidden"
        >
          {/* Glowing Border Animation */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-amber-400 transition-all duration-500"></div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-amber-300">
            Mangal Singh
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Full Stack Developer | MERN Stack | React & Node.js
          </p>
          <p className="mt-5 text-gray-300 text-sm sm:text-base leading-relaxed">
            Skilled in building scalable web applications with React, Node.js, Express, 
            and MongoDB. Passionate about problem-solving, clean UI/UX, and backend optimization.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="https://drive.google.com/file/d/1Q966xWvN7_ZvGf72yPQJXgVtc2ZdfzuQ/view?usp=sharing"
          download
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-10 inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-black font-semibold hover:from-amber-300 hover:to-yellow-200 transition shadow-md hover:shadow-xl hover:scale-105"
        >
          <FileDown size={22} />
          Download Resume
        </motion.a>
      </div>
    </div>
  );
}

export default Resume;
