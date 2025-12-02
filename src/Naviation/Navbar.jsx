// App.jsx
import React, { useRef, useState } from "react";
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

function App() {
  const homeRef     = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef  = useRef(null);
  const aboutRef    = useRef(null);
  const contactRef  = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={
          "fixed top-0 left-0 w-full z-50 " +
          "bg-transparent backdrop-blur-lg " +          // transparent + blur
          "border-b-2 border-orange-500 shadow-xl"       // orange border bottom
        }
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 md:px-10">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold"
            >
              🕉️
            </motion.div>
            <h1 className="text-2xl font-bold tracking-wide text-indigo-800">
              Creative <span className="text-orange-400">Impulse</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg font-medium text-orange-500">
            <li
              className="flex items-center gap-2 hover:text-yellow-300 transition cursor-pointer"
              onClick={() => scrollTo(homeRef)}
            >
              <FaHome /> Home
            </li>
            <li
              className="flex items-center gap-2 hover:text-yellow-300 transition cursor-pointer"
              onClick={() => scrollTo(servicesRef)}
            >
              <FaServicestack /> Services
            </li>
            <li
              className="flex items-center gap-2 hover:text-yellow-300 transition cursor-pointer"
              onClick={() => scrollTo(galleryRef)}
            >
              <FaImages /> Gallery
            </li>
            <li
              className="flex items-center gap-2 hover:text-yellow-300 transition cursor-pointer"
              onClick={() => scrollTo(aboutRef)}
            >
              <FaInfoCircle /> About
            </li>
            <li
              className="flex items-center gap-2 hover:text-yellow-300 transition cursor-pointer"
              onClick={() => scrollTo(contactRef)}
            >
              <FaPhoneAlt /> Contact
            </li>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-2xl cursor-pointer text-orange-500 hover:text-yellow-300 transition"
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
              className="md:hidden bg-transparent backdrop-blur-lg border-b-2 border-orange-500"
            >
              <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-medium text-orange-500">
                <li
                  className="flex items-center gap-2 hover:text-yellow-300 transition cursor-pointer"
                  onClick={() => { scrollTo(homeRef); toggleMenu(); }}
                >
                  <FaHome /> Home
                </li>
                <li
                  className="flex items-center gap-2 hover:text-yellow-300 transition cursor-pointer"
                  onClick={() => { scrollTo(servicesRef); toggleMenu(); }}
                >
                  <FaServicestack /> Services
                </li>
                <li
                  className="flex items-center gap-2 hover:text-yellow-300 transition cursor-pointer"
                  onClick={() => { scrollTo(galleryRef); toggleMenu(); }}
                >
                  <FaImages /> Gallery
                </li>
                <li
                  className="flex items-center gap-2 hover:text-yellow-300 transition cursor-pointer"
                  onClick={() => { scrollTo(aboutRef); toggleMenu(); }}
                >
                  <FaInfoCircle /> About
                </li>
                <li
                  className="flex items-center gap-2 hover:text-yellow-300 transition cursor-pointer"
                  onClick={() => { scrollTo(contactRef); toggleMenu(); }}
                >
                  <FaPhoneAlt /> Contact
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      
    </div>
  );
}

export default App;
