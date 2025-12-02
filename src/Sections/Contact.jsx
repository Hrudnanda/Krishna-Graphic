// Contact.jsx – Dark Chocolate Premium Version
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const socialMedia = [
  { name: "Facebook", icon: <FaFacebookF />, url: "https://facebook.com" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
  { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  { name: "WhatsApp", icon: <FaWhatsapp />, url: "https://wa.me/9040475287" },
];

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#3b1f0d] via-[#2a1609] to-[#1a0f07] overflow-hidden px-6 md:px-16 py-16 flex flex-col items-center text-white">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center drop-shadow-[0_0_20px_rgba(255,180,100,0.4)]"
      >
        Contact Us
      </motion.h1>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mb-20">
        {[
          { icon: <FaPhone className="text-4xl text-amber-300 mb-3" />, title: "Phone", content: "+91 9040475287" },
          { icon: <FaEnvelope className="text-4xl text-orange-300 mb-3" />, title: "Email", content: "store@example.com" },
          { icon: <FaMapMarkerAlt className="text-4xl text-red-300 mb-3" />, title: "Location", content: "123 Main Street, City, India" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center shadow-xl border border-white/20"
          >
            {item.icon}
            <h2 className="text-2xl font-semibold text-amber-200 mb-1">{item.title}</h2>
            <p className="text-gray-200 text-center">{item.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.01 }}
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 max-w-3xl w-full shadow-2xl border border-white/20 mb-20"
      >
        <h2 className="text-3xl font-bold text-amber-200 mb-6 text-center">
          Send us a Message
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-amber-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="mt-4 p-4 bg-gradient-to-r from-[#8b4513] to-[#5a2e0a] rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mb-20">
        {socialMedia.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 8 }}
            className="bg-white/10 backdrop-blur-md p-5 rounded-full text-white text-2xl border border-white/20 hover:text-amber-300 hover:shadow-lg"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>

      {/* Google Map */}
      <div className="w-full max-w-4xl h-96 rounded-3xl overflow-hidden shadow-2xl border border-white/20 mb-20">
        <iframe
          title="Store Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.229630569063!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190abf75b1b2d5%3A0x0!2zMjDCsDE3JzE3LjYiTiA4NcKwNDknMTkuOSJF!5e0!3m2!1sen!2sin!4v1708791358498!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-3xl"
        ></iframe>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-700 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      </div>

    </div>
  );
};

export default Contact;


