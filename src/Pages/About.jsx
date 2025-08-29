import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { motion } from 'framer-motion' // ✅ Import Framer Motion

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(255,200,0,0.25),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(0,150,255,0.25),transparent_50%)]"></div>

      {/* Content */}
      <div className="relative max-w-6xl text-center z-10">
        {/* Page Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold text-amber-400 drop-shadow-lg mb-8"
        >
          About Us
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
        >
          Welcome to our platform! We specialize in building modern, responsive, 
          and user-friendly web applications. Our mission is to simplify technology 
          and make it accessible to everyone.
        </motion.p>

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            { title: "🚀 Mission", text: "Delivering high-quality digital solutions that help businesses grow." },
            { title: "💡 Vision", text: "Becoming a trusted name in innovation and web development worldwide." },
            { title: "🤝 Values", text: "Integrity, creativity, and customer-first approach in all that we do." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-semibold text-amber-300 mb-4">{item.title}</h2>
              <p className="text-gray-300 text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { icon: <Phone size={36} className="text-amber-400" />, title: "Phone", detail: "+91 9317625898" },
            { icon: <Mail size={36} className="text-amber-400" />, title: "Email", detail: "smangal1307@email.com" },
            { icon: <MapPin size={36} className="text-amber-400" />, title: "Address", detail: "Jawalamukhi, Distt Kangra, Himachal Pradesh, 176031" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="flex items-start gap-5 bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform"
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
