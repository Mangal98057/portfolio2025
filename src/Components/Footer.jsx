import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900/80 to-gray-900/40 backdrop-blur-md border-t border-gray-700 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left - Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-gray-400 text-center md:text-left"
        >
          © {new Date().getFullYear()}{" "}
          <span className="text-amber-400 font-semibold hover:text-amber-300 transition">
            My Portfolio
          </span>
          . All rights reserved.
        </motion.p>

        {/* Right - Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex gap-7"
        >
          {[
            {
              icon: <Github size={22} />,
              href: "https://github.com/Mangal98057",
            },
            {
              icon: <Linkedin size={22} />,
              href: "https://linkedin.com/in/yourusername",
            },
            {
              icon: <Mail size={22} />,
              href: "gmail:smangal1307@gmail.com",
            },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.6)] transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
