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

// Images (placeholder)
import visiting from "../assets/led.jpg";
import flex from "../assets/led.jpg";
import tshirt from "../assets/led.jpg";
import cup from "../assets/led.jpg";
import led from "../assets/led.jpg";
import laser from "../assets/led.jpg";
import invite from "../assets/led.jpg";
import digital from "../assets/led.jpg";

// Services Array (Updated to cyan/pusia accents)
const services = [
  {
    title: "Visiting Card Design & Printing",
    icon: FaAddressCard,
    image: visiting,
    desc: "Professional visiting cards designed with modern layouts, premium textures, and vibrant color accuracy to represent your brand identity.",
    color: "text-cyan-400",
    shadow: "shadow-[0_0_20px_rgba(0,255,255,0.5)]",
  },
  {
    title: "Flex & Banner Printing",
    icon: FaImage,
    image: flex,
    desc: "Large-format flex and banners perfect for events and promotions — weather-resistant and high-resolution for maximum visibility.",
    color: "text-fuchsia-400",
    shadow: "shadow-[0_0_20px_rgba(255,0,255,0.5)]",
  },
  {
    title: "T-Shirt Printing",
    icon: FaTshirt,
    image: tshirt,
    desc: "Custom T-shirt printing for business, events, or gifting — available in sublimation, vinyl, and screen-printing techniques.",
    color: "text-cyan-300",
    shadow: "shadow-[0_0_20px_rgba(0,180,255,0.5)]",
  },
  {
    title: "Cup & Mug Printing",
    icon: FaMugHot,
    image: cup,
    desc: "Personalized mugs and cups with your logo, text, or photo — perfect for gifts, promotions, or office branding.",
    color: "text-fuchsia-300",
    shadow: "shadow-[0_0_20px_rgba(255,100,255,0.5)]",
  },
  {
    title: "LED Board & Signage",
    icon: FaLightbulb,
    image: led,
    desc: "Bright LED signage and glow boards that make your shop or brand visible even at night — built to last with vibrant lighting.",
    color: "text-cyan-500",
    shadow: "shadow-[0_0_20px_rgba(0,255,255,0.5)]",
  },
  {
    title: "Laser Cutting & Engraving",
    icon: FaCut,
    image: laser,
    desc: "Precision laser cutting and engraving services for wood, acrylic, and metal — perfect for nameplates, trophies, and decor.",
    color: "text-fuchsia-500",
    shadow: "shadow-[0_0_20px_rgba(255,0,255,0.5)]",
  },
  {
    title: "Invitation Card Design",
    icon: FaEnvelopeOpenText,
    image: invite,
    desc: "Custom invitation cards for weddings, birthdays, or business events — designed elegantly to fit your theme and personality.",
    color: "text-cyan-400",
    shadow: "shadow-[0_0_20px_rgba(0,255,255,0.5)]",
  },
  {
    title: "Digital Graphic Design",
    icon: FaPaintBrush,
    image: digital,
    desc: "Creative designs for social media, posters, and online branding — crafted with modern aesthetics and brand consistency.",
    color: "text-fuchsia-400",
    shadow: "shadow-[0_0_20px_rgba(255,0,255,0.5)]",
  },
];

const Service = () => {
  return (
    <div className="relative min-h-screen py-20 px-6 overflow-hidden text-white bg-gradient-to-br from-black via-cyan-900 to-fuchsia-900">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-cyan-500/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-fuchsia-500/20 blur-[150px] rounded-full"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-xl mb-4">
          Our{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text">
            Creative Services
          </span>
        </h1>
        <p className="text-cyan-200 text-lg max-w-2xl mx-auto border-b border-fuchsia-400/50 pb-2">
          From printing perfection to digital design mastery — **Creative impulse**
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
                boxShadow: service.shadow,
              }}
              className="rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-cyan-400/30 p-6 transition-all duration-500 text-center"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-2xl mb-6 border-2 border-fuchsia-400/50 transition-transform duration-500 hover:scale-105 hover:border-cyan-400"
              />

              <div
                className={`inline-flex justify-center items-center w-16 h-16 mx-auto mb-4 rounded-full border-2 border-cyan-400/70 ${service.color} bg-black/30 shadow-lg`}
              >
                <Icon className="text-3xl" />
              </div>

              <h3 className="text-xl font-bold text-cyan-400 mb-2 drop-shadow-md">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
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
        <p className="text-cyan-200 text-xl font-medium tracking-wide">
          🌟 Ready to bring your vision to life?
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0,255,255,0.5)" }}
          className="inline-block mt-4 px-10 py-3 bg-cyan-400 text-black rounded-full shadow-2xl font-bold uppercase tracking-wider transition duration-300"
        >
          Get a Custom Quote
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Service;
