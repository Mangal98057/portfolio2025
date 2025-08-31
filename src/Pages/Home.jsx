import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white overflow-hidden relative bg-gradient-to-br from-gray-900 via-indigo-950 to-black">
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-pink-500/40 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-52 h-52 bg-indigo-400/40 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section */}
      <main className="relative flex-1 flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 py-20 z-10 gap-16">
        
        {/* Profile Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative group flex justify-center"
        >
          {/* Glowing Gradient Shadow */}
          <motion.div
            className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-pink-500 via-amber-400 to-indigo-500 blur-2xl opacity-70 group-hover:opacity-100"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>

          {/* Profile Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative p-3 rounded-3xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md shadow-2xl border border-gray-700"
          >
            {/* Image */}
            <motion.img
              src="https://image2url.com/images/1756224760778-f11a0bba-cc58-4abd-93f7-a3a54e1b091c.png"
              alt="Profile"
              className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[26rem] lg:h-[26rem] rounded-2xl shadow-xl object-cover border-4 border-gray-700"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="max-w-2xl text-center lg:text-left space-y-4"
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-amber-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-md"
          >
            Hi, I'm <span className="text-amber-400">Mangal Singh</span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-pink-300"
          >
            MERN Stack Developer | Software Engineer 
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-2 text-gray-300 text-lg sm:text-xl leading-relaxed"
          >
            I'm a full-stack developer specialished in  <span className="text-amber-300 font-semibold">frontend and backend developement</span>, 
            for scalable web apps. I have made a variety of  <span className="text-pink-400 font-semibold">Mern Stack Applications.</span>, 
            Want to know how I may help Your <span className="text-indigo-400 font-semibold">Project</span>.
            Check out my projects from my Github Profile.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="/project"
              className="px-7 py-3 text-lg font-medium rounded-xl bg-gradient-to-r from-amber-400 to-pink-500 text-black hover:scale-110 transform transition shadow-lg"
            >
              Explore Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 text-lg font-medium rounded-xl border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-black transition shadow-lg"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}

export default Home;
