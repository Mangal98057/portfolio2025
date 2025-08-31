import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-12 relative overflow-hidden">
      {/* Decorative Background Orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-amber-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-blue-500/30 rounded-full blur-3xl animate-ping"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl bg-gray-900/80 backdrop-blur-2xl rounded-3xl shadow-[0_0_40px_rgba(255,200,0,0.2)] p-8 md:p-12 relative z-10 border border-gray-700/40"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-amber-400 text-center mb-4 drop-shadow-lg"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-300 mb-10 text-base sm:text-lg"
        >
          Have a project idea or just want to say hi? Drop me a message and
          I’ll get back to you!
        </motion.p>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/70 border border-gray-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 focus:outline-none transition placeholder-gray-400"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/70 border border-gray-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 focus:outline-none transition placeholder-gray-400"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-xl bg-gray-800/70 border border-gray-600 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 focus:outline-none transition placeholder-gray-400"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(251,191,36,0.7)" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold hover:from-amber-300 hover:to-yellow-400 transition text-lg shadow-lg"
          >
            Send Message 
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Contact;
