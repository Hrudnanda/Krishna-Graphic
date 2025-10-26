import React, { useState } from "react";
import {
  FaHome,
  FaImages,
  FaInfoCircle,
  FaPhoneAlt,
  FaServicestack,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-red-950 via-orange-500 to-rose-600 shadow-xl backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 md:px-10 text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold"
          >
            🕉️
          </motion.div>
          <h1 className="text-2xl font-bold tracking-wide">
            Krishna <span className="text-yellow-300">Graphics</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
          <li className="flex items-center gap-2 hover:text-yellow-300 transition">
            <FaHome /> Home
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-300 transition">
            <FaServicestack /> Services
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-300 transition">
            <FaImages /> Gallery
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-300 transition">
            <FaInfoCircle /> About
          </li>
          <li className="flex items-center gap-2 hover:text-yellow-300 transition">
            <FaPhoneAlt /> Contact
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer hover:text-yellow-300 transition"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gradient-to-br from-orange-600 to-rose-700 text-white font-medium shadow-lg"
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-lg">
              <li className="flex items-center gap-2 hover:text-yellow-300 transition">
                <FaHome /> Home
              </li>
              <li className="flex items-center gap-2 hover:text-yellow-300 transition">
                <FaServicestack /> Services
              </li>
              <li className="flex items-center gap-2 hover:text-yellow-300 transition">
                <FaImages /> Gallery
              </li>
              <li className="flex items-center gap-2 hover:text-yellow-300 transition">
                <FaInfoCircle /> About
              </li>
              <li className="flex items-center gap-2 hover:text-yellow-300 transition">
                <FaPhoneAlt /> Contact
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
