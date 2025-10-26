import React from "react";
import { motion } from "framer-motion";
import {
  FaAddressCard,
  FaImage,
  FaTshirt,
  FaMugHot,
  FaLightbulb,
  FaCut,
  FaEnvelopeOpenText,
  FaPaintBrush,
} from "react-icons/fa";

// Import your individual photos
import visiting from "../assets/led.jpg";
import flex from "../assets/led.jpg";
import tshirt from "../assets/led.jpg";
import cup from "../assets/led.jpg";
import led from "../assets/led.jpg";
import laser from "../assets/led.jpg";
import invite from "../assets/led.jpg";
import digital from "../assets/led.jpg";

const services = [
  {
    title: "Visiting Card Design & Printing",
    icon: FaAddressCard,
    image: visiting,
    desc: "Professional visiting cards designed with modern layouts, premium textures, and vibrant color accuracy to represent your brand identity.",
    color: "text-orange-400",
  },
  {
    title: "Flex & Banner Printing",
    icon: FaImage,
    image: flex,
    desc: "Large-format flex and banners perfect for events and promotions — weather-resistant and high-resolution for maximum visibility.",
    color: "text-pink-400",
  },
  {
    title: "T-Shirt Printing",
    icon: FaTshirt,
    image: tshirt,
    desc: "Custom T-shirt printing for business, events, or gifting — available in sublimation, vinyl, and screen-printing techniques.",
    color: "text-blue-400",
  },
  {
    title: "Cup & Mug Printing",
    icon: FaMugHot,
    image: cup,
    desc: "Personalized mugs and cups with your logo, text, or photo — perfect for gifts, promotions, or office branding.",
    color: "text-rose-400",
  },
  {
    title: "LED Board & Signage",
    icon: FaLightbulb,
    image: led,
    desc: "Bright LED signage and glow boards that make your shop or brand visible even at night — built to last with vibrant lighting.",
    color: "text-yellow-400",
  },
  {
    title: "Laser Cutting & Engraving",
    icon: FaCut,
    image: laser,
    desc: "Precision laser cutting and engraving services for wood, acrylic, and metal — perfect for nameplates, trophies, and decor.",
    color: "text-green-400",
  },
  {
    title: "Invitation Card Design",
    icon: FaEnvelopeOpenText,
    image: invite,
    desc: "Custom invitation cards for weddings, birthdays, or business events — designed elegantly to fit your theme and personality.",
    color: "text-purple-400",
  },
  {
    title: "Digital Graphic Design",
    icon: FaPaintBrush,
    image: digital,
    desc: "Creative designs for social media, posters, and online branding — crafted with modern aesthetics and brand consistency.",
    color: "text-indigo-400",
  },
];

const Service = () => {
  return (
    <div className="relative min-h-screen py-20 px-6 overflow-hidden text-white">
      {/* Animated aurora background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-pink-600 to-yellow-400">
        <div className="absolute inset-0 animate-aurora bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.2)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.15)_0%,transparent_50%)]"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-xl mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Creative Services
          </span>
        </h1>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto">
          From printing perfection to digital design mastery — Krishna Graphics
          is your one-stop creative hub.
        </p>
      </motion.div>

      {/* Services */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                scale: 1.07,
                rotate: 1,
                boxShadow: "0px 0px 30px rgba(255,255,255,0.5)",
              }}
              className="relative rounded-3xl overflow-hidden p-[2px] group"
            >
              {/* Animated gradient glow border */}
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#ff00ff,#ff8800,#00ffff,#ff00ff)] animate-rotate rounded-3xl blur-md opacity-70 group-hover:opacity-100"></div>

              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl text-center p-6 border border-white/30 transition-all duration-500 group-hover:bg-white/20">
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Icon with border */}
                <div
                  className={`inline-flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full border-2 border-white ${service.color} drop-shadow-glow`}
                >
                  <Icon className="text-3xl" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-20 relative z-10"
      >
        <p className="text-gray-100 text-lg font-medium">
          🌟 Want something unique?{" "}
          <span className="text-yellow-300 font-semibold">
            Let’s craft your next creative project together!
          </span>
        </p>
      </motion.div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-rotate {
            animation: rotate 8s linear infinite;
          }

          @keyframes aurora {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-aurora {
            background-size: 200% 200%;
            animation: aurora 10s ease-in-out infinite;
          }

          .drop-shadow-glow {
            filter: drop-shadow(0 0 10px currentColor);
          }
        `}
      </style>
    </div>
  );
};

export default Service;



