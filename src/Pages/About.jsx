import React from 'react'
import { Phone, Mail, MapPin, Globe, Users, Target } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,rgba(255,200,0,0.25),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(0,150,255,0.25),transparent_60%)]"></div>

      {/* Content */}
      <div className="relative max-w-7xl text-center z-10">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500 drop-shadow-lg mb-6"
        >
          About Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          We design and build <span className="text-amber-400 font-semibold">modern</span>, 
          <span className="text-pink-400 font-semibold"> responsive</span>, and 
          <span className="text-blue-400 font-semibold"> user-friendly</span> web applications 
          that simplify technology and make it accessible for everyone.
        </motion.p>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {[
            { icon: <Target size={42} className="text-amber-400" />, title: "Mission", text: "Delivering high-quality digital solutions that empower businesses to grow." },
            { icon: <Globe size={42} className="text-pink-400" />, title: "Vision", text: "Becoming a global leader in innovation and web development worldwide." },
            { icon: <Users size={42} className="text-blue-400" />, title: "Values", text: "Integrity, creativity, and customer-first approach in everything we do." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 + index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl hover:border-amber-400 transition-all"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h2 className="text-2xl font-bold text-amber-300 mb-3">{item.title}</h2>
              <p className="text-gray-300 text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-400 mt-20 mb-10"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: <Phone size={36} className="text-amber-400" />, title: "Phone", detail: "+91 9317625898" },
            { icon: <Mail size={36} className="text-pink-400" />, title: "Email", detail: "smangal1307@gmail.com" },
            { icon: <MapPin size={36} className="text-blue-400" />, title: "Address", detail: "Jawalamukhi, Distt Kangra, Himachal Pradesh, 176031" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              className="flex items-start gap-5 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-lg hover:scale-105 hover:shadow-xl hover:border-pink-400 transition-all"
            >
              {item.icon}
              <div>
                <h3 className="text-xl font-semibold text-amber-300">{item.title}</h3>
                <p className="text-gray-300 text-base">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
