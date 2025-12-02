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

// --- Framer Motion Variants (Unchanged) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

// Component for the Sparkle Effect (Unchanged)
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
      {/* Sparkle Effect - using warm chocolate/gold tones */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-amber-600/50 via-red-800/50 to-brown-500/50 rounded-3xl p-1 z-0"
          initial={{ filter: "blur(50px)", opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-white/5 rounded-[calc(1.5rem-1px)]"></div>
        </motion.div>
      )}

      {/* Actual Content */}
      <div className="relative bg-black/30 backdrop-blur-2xl p-10 rounded-3xl shadow-[0_0_40px_rgba(255,180,0,0.1)] border border-amber-600/20 text-center transition-all duration-500 z-10">
        {children}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    // Background: Deep Chocolate Brown Gradient
    <div className="min-h-screen bg-gradient-to-br from-[#1E110A] via-[#2A180E] to-[#3B2213] text-white px-6 py-20 flex flex-col items-center relative overflow-hidden">
      
      {/* Tailwind Keyframes (Unchanged) */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.4; }
        }
        @keyframes pulse-slow-reverse {
          0%, 100% { transform: scale(1.05); opacity: 0.4; }
          50% { transform: scale(1); opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite ease-in-out;
        }
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 10s infinite ease-in-out;
        }
      `}</style>

      {/* Background Glow Elements: Warm, Chocolatey Tones */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-red-800/20 blur-3xl rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/20 blur-3xl rounded-full animate-pulse-slow-reverse"></div>

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-16 drop-shadow-[0_4px_20px_rgba(255,255,255,0.4)] tracking-wide z-10"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-300">
          Unleashing
        </span>{" "}
        Vision
      </motion.h1>

      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Profile Card with Sparkle Effect */}
        <SparkleCard className="mb-16 w-full max-w-xl">
          {/* Floating Image (Unchanged) */}
          <motion.img
            src={profileImg}
            alt="Creative Head"
            initial={{ y: 0 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-44 h-44 mx-auto rounded-full object-cover border-4 border-amber-500/40 shadow-2xl mb-6"
          />

          <h2 className="text-3xl font-bold mb-2 flex justify-center items-center gap-2 drop-shadow-lg">
            <FaUserTie className="text-amber-300" /> {/* Gold icon for warmth */}
            John Doe
          </h2>
          <p className="text-xl font-medium text-red-300 mb-6">
            Creative Director | Design & Print Master
          </p>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed mb-8 text-[17px] italic border-l-4 border-amber-600 pl-4">
            With over **5 years** of design and printing expertise, John leads with a
            vision for modern creativity. His work blends **precision, innovation**,
            and aesthetic excellence—turning ideas into powerful visual stories.
          </p>

          {/* Contact Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-lg"
          >
            <motion.a
              href="mailto:john@example.com"
              variants={itemVariants}
              className="flex items-center gap-3 text-gray-100 hover:text-amber-400 transition transform hover:-translate-y-0.5 hover:shadow-lg p-2 rounded-lg"
            >
              <FaEnvelope className="text-amber-500" /> john@example.com
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              variants={itemVariants}
              className="flex items-center gap-3 text-gray-100 hover:text-red-400 transition transform hover:-translate-y-0.5 hover:shadow-lg p-2 rounded-lg"
            >
              <FaPhone className="text-red-500" /> +91 9876543210
            </motion.a>
          </motion.div>
        </SparkleCard>

        {/* --- Core Philosophy Section --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="grid md:grid-cols-2 gap-8 w-full mb-16"
        >
          {/* Philosophy Card */}
          <motion.div
            variants={itemVariants}
            className="bg-black/20 p-8 rounded-xl border border-red-700/30 backdrop-blur-md shadow-xl hover:shadow-[0_0_20px_rgba(185,28,28,0.5)] transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-red-300">
              <FaLightbulb className="text-3xl" /> Our Design Philosophy
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We believe in **functional beauty**. Every design element must serve a
              purpose, delivering maximum impact and clarity while remaining visually
              stunning. It's about solving problems with elegant, creative solutions.
            </p>
          </motion.div>

          {/* Core Skills Card */}
          <motion.div
            variants={itemVariants}
            className="bg-black/20 p-8 rounded-xl border border-amber-600/30 backdrop-blur-md shadow-xl hover:shadow-[0_0_20px_rgba(217,119,6,0.5)] transition duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-amber-300">
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

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-6 mt-8"
        >
          <motion.a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-300 hover:text-amber-500 transition-colors"
          >
            <FaLinkedin className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://twitter.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-gray-300 hover:text-red-500 transition-colors"
          >
            <FaTwitter className="w-8 h-8" />
          </motion.a>
          <motion.a
            href="https://instagram.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-300 hover:text-red-300 transition-colors"
          >
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
    </div>
  );
};

export default About;