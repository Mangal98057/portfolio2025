import React from "react";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react"; // download icon

function Resume() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-12">
      <div className="max-w-3xl w-full text-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-amber-400 mb-4"
        >
          My Resume
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 mb-8 text-base sm:text-lg"
        >
          Here you can view my professional resume and download a copy in PDF format.
        </motion.p>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gray-900/70 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg mb-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-amber-300">
            Mangal Singh
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            Full Stack Developer | MERN Stack | React & Node.js
          </p>
          <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
            Skilled in building scalable web applications with React, Node.js, Express, 
            and MongoDB. Passionate about problem-solving, clean UI/UX, and backend optimization.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="https://drive.google.com/file/d/1Q966xWvN7_ZvGf72yPQJXgVtc2ZdfzuQ/view?usp=sharing" // ⚡ put resume.pdf inside public folder
          download
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-black font-semibold hover:bg-amber-300 transition shadow-md hover:scale-105"
        >
          <FileDown size={20} />
          Download Resume (PDF)
        </motion.a>
      </div>
    </div>
  );
}

export default Resume;
