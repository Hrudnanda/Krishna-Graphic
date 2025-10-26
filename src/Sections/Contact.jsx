// Contact.jsx
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
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
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-700 to-pink-500 overflow-hidden px-6 md:px-16 py-16 flex flex-col items-center">

      {/* Page Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-12 text-center"
          style={{ textShadow: "0 0 15px rgba(255,255,255,0.7)" }}
      >
        Contact Us
      </h1>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        {[
          { icon: <FaPhone className="text-4xl text-green-400 mb-4" />, title: "Phone", content: "+91 9040475287" },
          { icon: <FaEnvelope className="text-4xl text-yellow-400 mb-4" />, title: "Email", content: "store@example.com" },
          { icon: <FaMapMarkerAlt className="text-4xl text-red-400 mb-4" />, title: "Location", content: "123 Main Street, City, State, India" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white bg-opacity-40 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            {item.icon}
            <h2 className="text-xl font-semibold text-white mb-2" style={{ textShadow: "0 0 8px rgba(0,0,0,0.7)" }}>{item.title}</h2>
            <p className="text-white text-center" style={{ textShadow: "0 0 8px rgba(0,0,0,0.7)" }}>{item.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white bg-opacity-40 backdrop-blur-md rounded-3xl p-10 max-w-3xl w-full shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-16"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center"
            style={{ textShadow: "0 0 10px rgba(0,0,0,0.7)" }}
        >
          Send us a Message
        </h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl border-none outline-none bg-white bg-opacity-60 text-black placeholder-gray-700 focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-xl border-none outline-none bg-white bg-opacity-60 text-black placeholder-gray-700 focus:ring-2 focus:ring-purple-400 transition"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded-xl border-none outline-none bg-white bg-opacity-60 text-black placeholder-gray-700 focus:ring-2 focus:ring-purple-400 transition"
          ></textarea>
          <button
            type="submit"
            className="mt-4 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Social Media Icons */}
      <div className="flex space-x-6 mb-16">
        {socialMedia.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="bg-white bg-opacity-40 backdrop-blur-md p-5 rounded-full text-white text-2xl hover:text-yellow-400 shadow-lg transition-all duration-300"
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
{/* Google Map Embed */}
<div className="w-full max-w-4xl h-96 rounded-3xl overflow-hidden shadow-2xl mb-16">
  <iframe
    title="Krishna Graphic Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.229630569063!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190abf75b1b2d5%3A0x0!2zMjDCsDE3JzE3LjYiTiA4NcKwNDknMTkuOSJF!5e0!3m2!1sen!2sin!4v1708791358498!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    className="rounded-3xl"
  ></iframe>
</div>


      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-400 rounded-full opacity-30 animate-pulse blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-400 rounded-full opacity-30 animate-pulse blur-3xl"></div>
      </div>

    </div>
  );
};

export default Contact;


