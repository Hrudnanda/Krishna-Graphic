// Gallery.jsx
import React from "react";
import { motion } from "framer-motion";

// Import images
import work1 from "../assets/led.jpg";
import work2 from "../assets/led.jpg";
import work3 from "../assets/led.jpg";
import work4 from "../assets/led.jpg";
import work5 from "../assets/led.jpg";
import work6 from "../assets/led.jpg";

const worksData = [
  { title: "Visiting Card Design", image: work1 },
  { title: "T-Shirt Printing", image: work2 },
  { title: "Flex Printing", image: work3 },
  { title: "Cup Printing", image: work4 },
  { title: "LED Board Design", image: work5 },
  { title: "Invitation Cards", image: work6 },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-cyan-900 to-fuchsia-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-12 drop-shadow-lg">
          Our Previous Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {worksData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.05, y: -5, rotate: 1 }}
              className="relative rounded-3xl cursor-pointer shadow-2xl overflow-visible"
            >
              {/* Pulsing glowing background */}
              <motion.div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-500 blur-3xl opacity-40"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />

              {/* Animated Image */}
              <motion.div
                className="relative z-10 rounded-3xl overflow-hidden border-2 border-cyan-400/40 shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover rounded-3xl"
                />
              </motion.div>

              {/* Overlay for title */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-3xl z-20">
                <h3 className="text-white font-semibold text-lg md:text-xl px-4 text-center drop-shadow-lg">
                  {work.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;



