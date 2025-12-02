// About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaUserTie,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPalette,
  FaLightbulb,
} from "react-icons/fa";
import profileImg from "../assets/led.jpg";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

// Sparkle/Glow Card
const SparkleCard = ({ children, className }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className={`relative rounded-3xl transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Hover Glow */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/30 to-black/30 rounded-3xl z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      )}

      <div className="relative bg-black/40 backdrop-blur-xl p-10 rounded-3xl shadow-lg border border-cyan-400/30 text-center z-10">
        {children}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-cyan-900 to-fuchsia-900 text-white px-6 py-20 flex flex-col items-center relative overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-fuchsia-500/20 blur-3xl rounded-full animate-pulse-slow-reverse"></div>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-16 drop-shadow-lg tracking-wide"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
          Meet
        </span>{" "}
        Our Creative Head
      </motion.h1>

      {/* Profile Card */}
      <SparkleCard className="mb-16 w-full max-w-xl">
        <motion.img
          src={profileImg}
          alt="Creative Head"
          initial={{ y: 0 }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-44 h-44 mx-auto rounded-full object-cover border-4 border-cyan-400/50 shadow-2xl mb-6"
        />

        <h2 className="text-3xl font-bold mb-2 flex justify-center items-center gap-2 drop-shadow-lg">
          <FaUserTie className="text-cyan-400" />
          SK FIROJ
        </h2>
        <p className="text-xl font-medium text-fuchsia-400 mb-6">Creative Head | CEO</p>

        <p className="text-gray-200 leading-relaxed mb-8 text-[17px] italic border-l-4 border-cyan-400 pl-4">
          With over **5 years** of design and printing expertise, John leads with a vision for modern creativity. His work blends **precision, innovation**, and aesthetic excellence—turning ideas into powerful visual stories.
        </p>

        {/* Contact Links */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-lg">
          <motion.a
            href="mailto:john@example.com"
            variants={itemVariants}
            className="flex items-center gap-3 text-gray-100 hover:text-cyan-400 transition transform hover:-translate-y-0.5 hover:shadow-lg p-2 rounded-lg"
          >
            <FaEnvelope className="text-cyan-400" /> john@example.com
          </motion.a>
          <motion.a
            href="tel:+919876543210"
            variants={itemVariants}
            className="flex items-center gap-3 text-gray-100 hover:text-fuchsia-400 transition transform hover:-translate-y-0.5 hover:shadow-lg p-2 rounded-lg"
          >
            <FaPhone className="text-fuchsia-400" /> +91 9876543210
          </motion.a>
        </motion.div>
      </SparkleCard>

      {/* Philosophy & Skills */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="grid md:grid-cols-2 gap-8 w-full mb-16 max-w-5xl"
      >
        {/* Philosophy Card */}
        <motion.div
          variants={itemVariants}
          className="bg-black/30 p-8 rounded-xl border border-cyan-400/30 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition duration-300"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-cyan-400">
            <FaLightbulb className="text-3xl" /> Our Design Philosophy
          </h3>
          <p className="text-gray-300 leading-relaxed">
            We believe in **functional beauty**. Every design element must serve a purpose, delivering maximum impact and clarity while remaining visually stunning. It's about solving problems with elegant, creative solutions.
          </p>
        </motion.div>

        {/* Core Skills Card */}
        <motion.div
          variants={itemVariants}
          className="bg-black/30 p-8 rounded-xl border border-fuchsia-400/30 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(255,0,255,0.5)] transition duration-300"
        >
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-fuchsia-400">
            <FaPalette className="text-3xl" /> Core Skills
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-left">
            <li>High-Fidelity **Print Production**</li>
            <li>Brand Identity & **Logo Design**</li>
            <li>Digital & **UX/UI** Principles</li>
            <li>Advanced **Color Theory**</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-6 mt-8"
      >
        <motion.a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-300 hover:text-cyan-400 transition-colors">
          <FaLinkedin className="w-8 h-8" />
        </motion.a>
        <motion.a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: -5 }} className="text-gray-300 hover:text-fuchsia-400 transition-colors">
          <FaTwitter className="w-8 h-8" />
        </motion.a>
        <motion.a href="https://instagram.com/johndoe" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="text-gray-300 hover:text-fuchsia-300 transition-colors">
          <FaInstagram className="w-8 h-8" />
        </motion.a>
      </motion.div>

      {/* Footer Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-center mt-16 text-xl italic text-gray-300 tracking-wide drop-shadow-lg max-w-xl border-t border-gray-700 pt-6"
      >
        "Creativity begins with vision — and we bring that vision to life."
      </motion.p>
    </div>
  );
};

export default About;
