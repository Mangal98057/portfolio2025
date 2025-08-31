import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      title: "E-Learning Platform",
      description:
        "A full-stack E-Learning platform built with React, Node.js, and MongoDB, featuring courses, user authentication, and a clean UI.",
      link: "https://github.com/yourusername/elearning-platform",
      image:
        "https://th.bing.com/th/id/R.a818581e40abd0b988bae0fa9facb218?rik=ySssB3fLrHHNLQ&riu=http%3a%2f%2fpolteksci.ac.id%2fblog%2fwp-content%2fuploads%2f2024%2f04%2fe-learning-education-template-ve.png&ehk=MB82SCyO%2bQ75SZTcoCORqAgSrc6qp7URtwP3leSDfgw%3d&risl=&pid=ImgRaw&r=0",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
    },
    {
      title: "Image Search Engine",
      description:
        "A React-based image search application integrated with the Unsplash API for high-quality photo browsing.",
      link: "https://github.com/yourusername/image-search",
      image:
        "https://static.vecteezy.com/system/resources/previews/035/880/747/non_2x/online-search-bar-concept-people-using-mobile-smarthone-and-laptop-for-searching-info-in-web-browser-illustration-in-flat-style-vector.jpg",
      tags: ["React", "API", "Tailwind"],
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing skills, projects, and resume with modern animations and responsive design.",
      link: "https://github.com/yourusername/portfolio",
      image:
        "https://www.lifewire.com/thmb/CuN0TgCbeVQKvUwj3FJoZjI8SgE=/6000x4000/filters:fill(auto,1)/portfolio-175431947-598264a2685fbe001199fa73.jpg",
      tags: ["React", "Framer Motion", "Tailwind"],
    },
    {
      title: "E-Commerce Website",
      description:
        "Full-stack MERN e-commerce platform with JWT authentication and Stripe payment integration.",
      link: "https://github.com/yourusername/ecommerce",
      image: "https://thingsolver.com/wp-content/uploads/what-is-e-commerce-search-engine.webp",
      tags: ["MERN", "JWT", "Stripe"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center px-6 py-16">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-amber-400 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
         My Projects
      </motion.h1>

      <motion.p
        className="text-gray-400 text-center max-w-2xl mx-auto mt-4 mb-12 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A collection of my featured works showcasing{" "}
        <span className="text-amber-300 font-medium">full-stack apps</span>,
        interactive dashboards, and{" "}
        <span className="text-amber-300 font-medium">modern UI builds</span>.
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/40 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-amber-500/30 transition relative group overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image with overlay */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-t-2xl group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-amber-300 group-hover:text-amber-400 transition">
                {project.title}
              </h2>
              <p className="mt-3 text-gray-300 text-sm">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-amber-400/20 text-amber-300 rounded-full border border-amber-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project <ExternalLink size={18} />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
