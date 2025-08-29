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
      image: "https://th.bing.com/th/id/R.a818581e40abd0b988bae0fa9facb218?rik=ySssB3fLrHHNLQ&riu=http%3a%2f%2fpolteksci.ac.id%2fblog%2fwp-content%2fuploads%2f2024%2f04%2fe-learning-education-template-ve.png&ehk=MB82SCyO%2bQ75SZTcoCORqAgSrc6qp7URtwP3leSDfgw%3d&risl=&pid=ImgRaw&r=0",
      tags: ["React", "Node.js", "MongoDB","Express.js"],
    },
    {
      title: "Image Search Engine",
      description:
        "A React-based image search application integrated with the Unsplash API for high-quality photo browsing.",
      link: "https://github.com/yourusername/image-search",
      image: "https://static.vecteezy.com/system/resources/previews/035/880/747/non_2x/online-search-bar-concept-people-using-mobile-smarthone-and-laptop-for-searching-info-in-web-browser-illustration-in-flat-style-vector.jpg",
      tags: ["React", "API", "Tailwind"],
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing skills, projects, and resume with modern animations and responsive design.",
      link: "https://github.com/yourusername/portfolio",
      image: "https://www.lifewire.com/thmb/CuN0TgCbeVQKvUwj3FJoZjI8SgE=/6000x4000/filters:fill(auto,1)/portfolio-175431947-598264a2685fbe001199fa73.jpg",
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col justify-center items-center px-6 py-12">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-amber-400 mb-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>

      <motion.p
        className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A collection of my featured works showcasing full-stack applications,
        dashboards, and creative builds 
      </motion.p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />

            {/* Card Content */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-amber-300">
                {project.title}
              </h2>
              <p className="mt-3 text-gray-300">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-amber-400/20 text-amber-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition"
              >
                View Project <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
