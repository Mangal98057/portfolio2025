import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-md border-t border-gray-700 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left - Brand / Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-amber-400 font-semibold">My Portfolio</span>.  
          All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex gap-7">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-amber-400 transition"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
