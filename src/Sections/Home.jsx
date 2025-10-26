import React from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaLaptop, FaPrint, FaCameraRetro } from "react-icons/fa";
import heroImg from "../assets/led.jpg"; // replace with your image

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 overflow-hidden">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Left Text */}
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
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#services"
            className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-2xl transition"
          >
            Explore Services
          </motion.a>
        </motion.div>

        {/* Right Image */}
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

      {/* Services Preview Section */}
      <section
        id="services"
        className="py-16 bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-50"
      >
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            Our Creative Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-3"
            >
              <FaPaintBrush className="text-4xl text-orange-500" />
              <h3 className="font-semibold text-lg text-gray-700">
                Graphic Design
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Stunning visuals for posters, brochures, and branding.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-3"
            >
              <FaLaptop className="text-4xl text-pink-500" />
              <h3 className="font-semibold text-lg text-gray-700">
                Digital Design
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Web banners, social media creatives, and digital ads.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-3"
            >
              <FaPrint className="text-4xl text-rose-500" />
              <h3 className="font-semibold text-lg text-gray-700">
                Printing Solutions
              </h3>
              <p className="text-sm text-gray-600 text-center">
                High-quality print materials with vibrant results.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-3"
            >
              <FaCameraRetro className="text-4xl text-yellow-500" />
              <h3 className="font-semibold text-lg text-gray-700">
                Photo Editing
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Professional retouching & creative compositions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;