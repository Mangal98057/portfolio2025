import React from "react";
import {
  Code,
  Layout,
  Database,
  Github,
  Server,
  Palette,
  BarChart3,
  Cloud,
  Shield,
} from "lucide-react"; 
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "HTML", icon: <Code size={28} /> },
    { name: "CSS", icon: <Palette size={28} /> },
    { name: "JavaScript", icon: <Code size={28} /> },
    { name: "React", icon: <Layout size={28} /> },
    { name: "Tailwind CSS", icon: <Palette size={28} /> },
    { name: "Node.js", icon: <Server size={28} /> },
    { name: "Express.js", icon: <Server size={28} /> },
    { name: "MongoDB", icon: <Database size={28} /> },
    { name: "Git & GitHub", icon: <Github size={28} /> },
    { name: "C Language", icon: <Cloud size={28} /> },
    { name: "Restful API", icon: <BarChart3 size={28} /> },
    { name: "Bootstrap", icon: <Layout size={28} /> },
    { name: "JWT", icon: <Shield size={28} /> },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 sm:px-10 lg:px-16 py-16">
      <section className="w-full max-w-6xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-amber-400 mb-14 relative inline-block"
        >
          Skills
          <span className="block w-24 h-1 bg-amber-400 mx-auto mt-3 rounded-full"></span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.12, rotate: 1 }}
              className="group flex flex-col items-center justify-center gap-3 
                bg-gradient-to-br from-gray-800/60 to-gray-900/40 
                backdrop-blur-md border border-white/10 
                rounded-2xl shadow-lg p-6 text-center 
                hover:shadow-[0_0_25px_rgba(251,191,36,0.7)] transition cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="text-amber-400 group-hover:text-black bg-amber-400/10 group-hover:bg-amber-400 rounded-full p-4 transition"
              >
                {skill.icon}
              </motion.div>

              {/* Name */}
              <p className="text-base sm:text-lg font-semibold group-hover:text-amber-300 transition">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
