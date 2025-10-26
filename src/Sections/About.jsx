// About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import team1 from "../assets/led.jpg";

const teamMember = {
  name: "John Doe",
  role: "Creative Director",
  image: team1,
  email: "john@example.com",
  phone: "+91 9876543210",
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-700 to-pink-500 text-white p-6 md:p-16">

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        About Our Company
      </motion.h1>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-white/20"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            We strive to provide the best digital solutions for businesses, from
            creative printing to innovative LED displays, ensuring every client
            shines.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-white/20"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p>
            To be the leading creative service provider, combining technology
            and art to transform ideas into impactful, visual experiences.
          </p>
        </motion.div>
      </div>

      {/* Team Section */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Meet Our Team
      </motion.h2>

      <div className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.08, boxShadow: "0 0 50px rgba(255,255,255,0.6)" }}
          className="relative bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 text-center before:absolute before:-inset-1 before:rounded-2xl before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500 before:blur-2xl before:opacity-50 before:z-0"
        >
          <div className="relative z-10">
            <img
              src={teamMember.image}
              alt={teamMember.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-white/30"
            />
            <h3 className="text-xl font-semibold mb-1">{teamMember.name}</h3>
            <p className="text-sm mb-2">{teamMember.role}</p>
            <p className="text-sm mb-1">📧 {teamMember.email}</p>
            <p className="text-sm">📞 {teamMember.phone}</p>
          </div>
        </motion.div>
      </div>

      {/* Store Location */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="mt-16 p-8 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md border border-white/30 flex items-center justify-center gap-4 relative before:absolute before:-inset-1 before:rounded-2xl before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500 before:blur-2xl before:opacity-50 before:z-0"
      >
        <div className="relative z-10 flex items-center gap-4 text-lg font-medium">
          <FaMapMarkerAlt size={28} className="text-pink-400 animate-pulse" />
          <p>123 Creative Street, Design City, India</p>
        </div>
      </motion.div>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="text-center mt-16 text-lg italic"
      >
        "Turning visions into reality, one creative solution at a time."
      </motion.p>
    </div>
  );
};

export default About;

