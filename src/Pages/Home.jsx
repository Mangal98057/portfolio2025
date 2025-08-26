import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div
      className="flex flex-col min-h-screen text-white overflow-hidden bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/15286/pexels-photo.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-indigo-900/80 to-black/90"></div>

      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-20 py-16 z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative mb-8 group"
        >
          {/* Glowing background ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-amber-400 to-yellow-300 blur-3xl opacity-90 group-hover:opacity-90"
            animate={{ rotate: 60 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          ></motion.div>

          {/* Profile Image Bigger */}
          <motion.img
            src="https://image2url.com/images/1756224760778-f11a0bba-cc58-4abd-93f7-a3a54e1b091c.png"
            alt="Profile"
            className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-100 border-4 border-amber-400 rounded-full shadow-2xl object-cover"
            whileHover={{ scale: 1.1, rotate: 6 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="max-w-2xl"
        >
          {/* Title */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-pink-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Welcome to
          </motion.h1>

          {/* Portfolio */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-amber-400 drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            My Portfolio
          </motion.h1>

          {/* Your Name */}
          <motion.h2
            className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            — Mangal Singh
          </motion.h2>

          {/* Roles */}
          <motion.p
            className="mt-2 text-xl sm:text-2xl lg:text-3xl font-medium text-pink-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            MERN Stack Developer | Software Developer
          </motion.p>

          {/* Description */}
          <motion.p
            className="mt-4 text-gray-300 text-lg sm:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
          >
            A showcase of my{" "}
            <span className="text-amber-300 font-semibold">projects</span>,{" "}
            <span className="text-pink-400 font-semibold">skills</span>, and{" "}
            <span className="text-indigo-400 font-semibold">creativity</span> —
            built with React, Tailwind & Framer Motion
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <Link
              to="/project"
              className="px-6 py-3 text-lg font-medium rounded-xl bg-amber-400 text-black hover:bg-amber-300 transition shadow-lg hover:shadow-amber-500/50"
            >
              Explore Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 text-lg font-medium rounded-xl border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition shadow-lg hover:shadow-pink-500/50"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </main>

      {/* Floating Decorations */}
      <motion.div
        className="absolute top-16 left-10 w-28 h-28 bg-pink-500 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-36 h-36 bg-indigo-400 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </div>
  );
}

export default Home;
