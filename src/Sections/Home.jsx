import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/led.jpg"; // replace with your image

const statsData = [
  { label: "Customers", value: 50000, suffix: "+" },
  { label: "Return Customers", value: 30000, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 5000; // 5 seconds
    const increment = value / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <span
      className="text-5xl md:text-6xl font-extrabold text-white 
      [text-shadow:0_0_8px_#fff,0_0_15px_#ff00ff,0_0_25px_#ff00ff] 
      animate-pulse"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-rose-600 text-transparent bg-clip-text">
              Krishna Graphics
            </span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-lg mx-auto md:mx-0">
            We design your imagination — from creative posters to high-end
            digital graphics that speak louder than words.
          </p>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            {/* Our Services Button */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#stats"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition"
            >
              Our Services
            </motion.a>

            {/* Contact Us Button */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-0"
        >
          <motion.img
            src={heroImg}
            alt="Krishna Graphics"
            className="rounded-full shadow-2xl w-64 md:w-96 border-4 border-white mx-auto"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </section>

      {/* Glowing Statistics Section */}
      <section
        id="stats"
        className="py-16 bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-50"
      >
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Our Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.3, duration: 0.6 }}
                className="relative p-10 flex flex-col items-center rounded-3xl cursor-pointer shadow-lg
                  bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500
                  border border-white border-opacity-20
                  before:absolute before:-inset-1 before:bg-gradient-to-r before:from-pink-400 before:via-purple-400 before:to-indigo-400 before:blur-xl before:rounded-3xl before:opacity-70
                  hover:scale-105 transition-transform"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-4 text-white font-semibold text-lg z-10 relative">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
