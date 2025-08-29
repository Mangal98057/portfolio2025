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
} from "lucide-react"; // Icons
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
    { name: "C language", icon: <Cloud size={28} /> },
    { name: "Restful API", icon: <BarChart3 size={28} /> },
    { name: "Bootstrap", icon: <Layout size={28} /> },
    { name:"JWT",icon:<Code size={28}/>}
  ];
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 sm:px-10 lg:px-16 py-16">
      {/* Skills Section */}
      <section className="w-full max-w-6xl">
        {/* Title with Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-amber-400 mb-12"
        >
          Skills
        </motion.h2>

        {/* Grid of Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="flex flex-col items-center justify-center gap-3 
                bg-white/10 backdrop-blur-md border border-white/20 
                rounded-xl shadow-md p-6 text-center 
                hover:bg-amber-400 hover:text-black transition cursor-pointer"
            >
              <div className="text-amber-400">{skill.icon}</div>
              <p className="text-base sm:text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;
