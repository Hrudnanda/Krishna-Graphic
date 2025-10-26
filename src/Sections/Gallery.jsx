import React from "react";
import { motion } from "framer-motion";

// Import your previous work images
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Our Previous Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {worksData.map((work, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6, type: "spring", stiffness: 80 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-3xl cursor-pointer shadow-2xl overflow-visible"
            >
              {/* Pulsing glowing background */}
              <motion.div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 blur-3xl opacity-40"
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

              {/* Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Overlay for title */}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-3xl z-20">
                <h3 className="text-white font-semibold text-lg md:text-xl px-4 text-center">
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

