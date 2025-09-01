import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Home, Info, Mail, FileText, Moon, Sun, Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      {/* Main Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center 
        rounded-2xl border border-white/20 shadow-lg 
        backdrop-blur-lg bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 
        dark:from-gray-900/60 dark:via-gray-800/60 dark:to-black/70"
      >
        {/* Logo / Brand */}
        <Link to="/Mangal98057/portfolio2025" className="flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 flex items-center justify-center rounded-full 
            bg-gradient-to-tr from-cyan-400 to-blue-500 
            text-black font-extrabold text-lg shadow-md"
          >
            MS
          </motion.div>
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            Mangal Singh
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-lg font-medium items-center">
          {[
            { to: '/Mangal98057/portfolio2025', label: 'Home', icon: <Home size={20} /> },
            { to: '/about', label: 'About', icon: <Info size={20} /> },
            { to: '/contact', label: 'Contact', icon: <Mail size={20} /> },
            { to: '/project', label: 'Project', icon: <FileText size={20} /> },
            { to: '/resume', label: 'Resume', icon: <FileText size={20} /> },
            { to: '/skills', label: 'Skills', icon: <Zap size={20} /> },
          ].map((item, index) => (
            <motion.li
              key={item.to}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1 }}
            >
              <Link
                to={item.to}
                className="flex items-center gap-2 transition hover:text-cyan-400 dark:hover:text-purple-400"
              >
                {item.icon} {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Dark Mode Toggle + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ rotate: 180, scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full 
              bg-white/20 dark:bg-gray-700/40 
              text-white dark:text-gray-200 
              border border-white/30 dark:border-gray-600 
              hover:scale-110 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg bg-white/20 dark:bg-gray-700/40 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 py-4 flex flex-col gap-4 border-t border-white/10 shadow-lg"
          >
            {[
              { to: '/Mangal98057/portfolio2025', label: 'Home', icon: <Home size={20} /> },
              { to: '/about', label: 'About', icon: <Info size={20} /> },
              { to: '/contact', label: 'Contact', icon: <Mail size={20} /> },
              { to: '/project', label: 'Project', icon: <FileText size={20} /> },
              { to: '/resume', label: 'Resume', icon: <FileText size={20} /> },
              { to: '/skills', label: 'Skills', icon: <Zap size={20} /> },
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-cyan-400 dark:hover:text-purple-400 transition"
                >
                  {item.icon} {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
