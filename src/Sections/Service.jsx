// Service.jsx
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

// Images (using placeholders)
import visiting from "../assets/led.jpg";
import flex from "../assets/led.jpg";
import tshirt from "../assets/led.jpg";
import cup from "../assets/led.jpg";
import led from "../assets/led.jpg";
import laser from "../assets/led.jpg";
import invite from "../assets/led.jpg";
import digital from "../assets/led.jpg";

// Services Array (Icon Colors updated to warm tones)
const services = [
  {
    title: "Visiting Card Design & Printing",
    icon: FaAddressCard,
    image: visiting,
    desc: "Professional visiting cards designed with modern layouts, premium textures, and vibrant color accuracy to represent your brand identity.",
    color: "text-amber-400", // Gold/Amber
    shadow: "shadow-[0_0_20px_rgba(255,160,0,0.5)]",
  },
  {
    title: "Flex & Banner Printing",
    icon: FaImage,
    image: flex,
    desc: "Large-format flex and banners perfect for events and promotions — weather-resistant and high-resolution for maximum visibility.",
    color: "text-red-400", // Deep Red
    shadow: "shadow-[0_0_20px_rgba(220,38,38,0.5)]",
  },
  {
    title: "T-Shirt Printing",
    icon: FaTshirt,
    image: tshirt,
    desc: "Custom T-shirt printing for business, events, or gifting — available in sublimation, vinyl, and screen-printing techniques.",
    color: "text-amber-300", // Lighter Amber
    shadow: "shadow-[0_0_20px_rgba(255,190,0,0.5)]",
  },
  {
    title: "Cup & Mug Printing",
    icon: FaMugHot,
    image: cup,
    desc: "Personalized mugs and cups with your logo, text, or photo — perfect for gifts, promotions, or office branding.",
    color: "text-red-300", // Lighter Red
    shadow: "shadow-[0_0_20px_rgba(240,60,60,0.5)]",
  },
  {
    title: "LED Board & Signage",
    icon: FaLightbulb,
    image: led,
    desc: "Bright LED signage and glow boards that make your shop or brand visible even at night — built to last with vibrant lighting.",
    color: "text-yellow-500", // Bright Gold
    shadow: "shadow-[0_0_20px_rgba(255,215,0,0.5)]",
  },
  {
    title: "Laser Cutting & Engraving",
    icon: FaCut,
    image: laser,
    desc: "Precision laser cutting and engraving services for wood, acrylic, and metal — perfect for nameplates, trophies, and decor.",
    color: "text-amber-500", // Rich Amber
    shadow: "shadow-[0_0_20px_rgba(255,140,0,0.5)]",
  },
  {
    title: "Invitation Card Design",
    icon: FaEnvelopeOpenText,
    image: invite,
    desc: "Custom invitation cards for weddings, birthdays, or business events — designed elegantly to fit your theme and personality.",
    color: "text-red-500", // Rich Red
    shadow: "shadow-[0_0_20px_rgba(180,40,40,0.5)]",
  },
  {
    title: "Digital Graphic Design",
    icon: FaPaintBrush,
    image: digital,
    desc: "Creative designs for social media, posters, and online branding — crafted with modern aesthetics and brand consistency.",
    color: "text-amber-600", // Dark Amber
    shadow: "shadow-[0_0_20px_rgba(180,80,0,0.5)]",
  },
];

const Service = () => {
  return (
    // Background: Deep Chocolate Brown Gradient
    <div className="relative min-h-screen py-20 px-6 overflow-hidden text-white bg-gradient-to-br from-[#1E110A] via-[#2A180E] to-[#3B2213]">
      
      {/* Background Lighting/Glow Effects (Matching Home/About) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-red-800/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-amber-600/20 blur-[150px] rounded-full"></div>
      </div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-amber-400 to-red-300 text-transparent bg-clip-text">
            Creative Services
          </span>
        </h1>
        <p className="text-red-200 text-lg max-w-2xl mx-auto border-b border-amber-800/50 pb-2">
          From printing perfection to digital design mastery — **Krishna Graphics**
          is your one-stop creative hub.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                translateY: -8,
                boxShadow: service.shadow, // Use the service-specific shadow
              }}
              // Card Style: Darker background, amber border, centered content
              className="rounded-3xl overflow-hidden bg-[#2A180E]/70 backdrop-blur-xl border border-amber-800/50 p-6 transition-all duration-500 text-center"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-2xl mb-6 border-2 border-red-800/50 transition-transform duration-500 hover:scale-105 hover:border-amber-600"
              />

              {/* Icon */}
              <div
                className={`inline-flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full border-2 border-amber-600/70 ${service.color} bg-black/30 shadow-lg`}
              >
                <Icon className="text-3xl" />
              </div>

              <h3 className="text-xl font-bold text-amber-200 mb-2 drop-shadow-md">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center mt-20 relative z-10"
      >
        <p className="text-red-200 text-xl font-medium tracking-wide">
          🌟 Ready to bring your vision to life?
        </p>
        <motion.a
            href="#contact" // Assuming there's a contact section to link to
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(255,160,0,0.5)" }}
            className="inline-block mt-4 px-10 py-3 bg-amber-600 text-black rounded-full shadow-2xl font-bold uppercase tracking-wider transition duration-300"
        >
            Get a Custom Quote
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Service;