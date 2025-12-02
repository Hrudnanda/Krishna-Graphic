import React from "react";
import { motion } from "framer-motion";

// --- Custom Icon Components (Inline SVG) ---
// These custom icons are used to avoid reliance on external libraries like react-icons/fa.
const Icon = ({ path, viewBox = "0 0 24 24", className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {path}
  </svg>
);

const PhoneIcon = (props) => (
  <Icon
    {...props}
    path={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-7.5-7.5 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.76 17.6 17.6 0 0 0 .86 3.76 2 2 0 0 1-1.15 2.15l-1.39.81a17.6 17.6 0 0 0 7.5 7.5l.81-1.39a2 2 0 0 1 2.15-1.15 17.6 17.6 0 0 0 3.76.86 2 2 0 0 1 1.76 2Z" />}
  />
);

const MailIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
      </>
    }
  />
);

const MapPinIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    }
  />
);

const FacebookIcon = (props) => (
  <Icon
    {...props}
    path={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />}
  />
);

const InstagramIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    }
  />
);

const TwitterIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2.1l-1.4-1.4c-1.3-1.3-2.1-3.3-2.1-5.4V8.5C7.8 7.2 9 6.7 10.5 7c-2.3-1.4-4-3-4-5s1.7-2 4-2c2 0 3.5 1.7 4 4v1a.5.5 0 0 1-.5.5c-2 0-3.5 1.5-4 4 0 0-2 0-4-2" />
      </>
    }
  />
);

const YoutubeIcon = (props) => (
  <Icon
    {...props}
    viewBox="0 0 24 24"
    path={
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2A50.29 50.29 0 0 0 12 4.17a50.29 50.29 0 0 0-8.6.25 2.78 2.78 0 0 0-1.94 2C1.69 7.6 1.5 9.8 1.5 12c0 2.2.2 4.4.5 5.58a2.78 2.78 0 0 0 1.94 2 50.29 50.29 0 0 0 8.6.25 50.29 50.29 0 0 0 8.6-.25 2.78 2.78 0 0 0 1.94-2c.3-.18.5-2.38.5-5.58s-.2-4.4-.5-5.58z" />
        <path d="m10 15 5-3-5-3v6z" />
      </>
    }
  />
);
// --- End Icon Components ---


const socialMedia = [
  { name: "Facebook", icon: <FacebookIcon />, url: "https://facebook.com", color: "hover:text-blue-500" },
  { name: "Instagram", icon: <InstagramIcon />, url: "https://instagram.com", color: "hover:text-pink-500" },
  { name: "Twitter", icon: <TwitterIcon />, url: "https://twitter.com", color: "hover:text-sky-400" },
];

const ContactContent = () => {
  // Theme colors for contact cards (Cyan and Fuchsia highlights)
  const contactInfo = [
    { icon: <PhoneIcon className="text-4xl text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(50,250,250,0.5)]" />, title: "Call Us", content: "+91 9040475287", shadow: "shadow-[0_0_25px_rgba(50,250,250,0.6)]", border: "border-b-4 border-cyan-600/50 hover:border-cyan-400" },
    { icon: <MailIcon className="text-4xl text-fuchsia-400 mb-4 drop-shadow-[0_0_10px_rgba(250,50,250,0.5)]" />, title: "Email Us", content: "hello@creativeimpulse.in", shadow: "shadow-[0_0_25px_rgba(250,50,250,0.6)]", border: "border-b-4 border-fuchsia-600/50 hover:border-fuchsia-400" },
    { icon: <MapPinIcon className="text-4xl text-blue-400 mb-4 drop-shadow-[0_0_10px_rgba(50,50,250,0.5)]" />, title: "Visit Studio", content: "Creative Hub, Tech Park, City, India", shadow: "shadow-[0_0_25px_rgba(50,50,250,0.6)]", border: "border-b-4 border-blue-600/50 hover:border-blue-400" },
  ];

  return (
    // Background is handled by the App wrapper for consistency
    <div id="contact-content" className="relative py-20 px-6 overflow-hidden text-white">

      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-16 text-center relative z-20"
      >
        Ignite Your{" "}
        <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-500 text-transparent bg-clip-text">
          Impulse
        </span>
      </motion.h1>

      {/* Contact Info Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto mb-16 relative z-20">
        {contactInfo.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: item.shadow }}
            // Card Style: Dark background, vibrant border highlight
            className={`bg-[#181818] rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl transition-all duration-300 ${item.border}`}
          >
            {item.icon}
            <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{item.title}</h2>
            <p className="text-gray-400 text-center">{item.content}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form & Social Media Wrapper */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl mx-auto relative z-20">
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-[#181818] p-10 flex-1 rounded-3xl shadow-2xl border border-gray-700/50"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
            Start Your Project
          </h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              // Input style: Dark background, cyan focus ring
              className="p-4 rounded-xl border-2 border-transparent outline-none bg-[#282828] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border-2 border-transparent outline-none bg-[#282828] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300"
            />
             <select
                className="p-4 rounded-xl border-2 border-transparent outline-none bg-[#282828] text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300 appearance-none"
             >
                <option disabled selected>Select Service</option>
                <option>Brand Identity & Logo</option>
                <option>Web Design & Development</option>
                <option>Digital Marketing Strategy</option>
                <option>Other</option>
            </select>
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="p-4 rounded-xl border-2 border-transparent outline-none bg-[#282828] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0px 8px 20px rgba(255,0,255,0.8)" }}
              // Button style: Dynamic Cyan-Fuchsia gradient
              className="mt-4 p-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-xl font-bold text-white uppercase tracking-wider shadow-lg transition transform duration-300"
            >
              Send Impulse
            </motion.button>
          </form>
        </motion.div>

        {/* Social Media & Map Wrapper */}
        <div className="lg:w-1/3 flex flex-col gap-10">
          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#181818] p-6 rounded-3xl shadow-2xl border border-gray-700/50"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">Follow The Flow</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {socialMedia.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.25, boxShadow: "0px 0px 15px rgba(255, 0, 255, 0.5)" }}
                  // Social icon style: Dark background, vibrant text on hover
                  className="w-14 h-14 flex items-center justify-center rounded-full text-white text-3xl bg-gray-800 hover:text-fuchsia-400 shadow-md transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-80 lg:h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-fuchsia-500/50"
          >
            <iframe
              title="Creative Impulse Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.229630569063!2d85.8245!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190abf75b1b2d5%3A0x0!2zMjDCsDE3JzE3LjYiTiA4NcKwNDknMTkuOSJF!5e0!3m2!1sen!2sin!4v1708791358498!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-3xl"
            ></iframe>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

// --- Footer Component Definition (Integrated & Redesigned) ---
const Footer = () => {
  // Logo reflects the new company name and vibrant gradient
  const Logo = () => (
    <div className="flex items-center space-x-2">
      <Icon path={<path d="M12 2L2 7l10 5 10-5L12 2zM2 17l10 5 10-5M2 12l10 5 10-5" />} className="w-8 h-8 text-fuchsia-400" viewBox="0 0 24 24" />
      <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text">
        Creative Impulse
      </span>
    </div>
  );
  
  const footerSocials = [
    { href: "#", icon: <FacebookIcon className="w-6 h-6" />, color: "hover:text-blue-500" },
    { href: "#", icon: <InstagramIcon className="w-6 h-6" />, color: "hover:text-pink-500" },
    { href: "#", icon: <YoutubeIcon className="w-6 h-6" />, color: "hover:text-red-500" },
    { href: "#", icon: <TwitterIcon className="w-6 h-6" />, color: "hover:text-sky-400" },
  ];

  return (
    // Updated Footer: Deep Black background, sharp corner radius
    <footer className="bg-black text-white py-12 mt-20 w-full rounded-t-[4rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] border-t-8 border-fuchsia-500/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <Logo />
          <p className="text-gray-400 text-sm leading-relaxed mt-4">
            Igniting brands with bold strategy, vibrant design, and digital innovation. We transform ideas into visual reality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-fuchsia-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-fuchsia-400 transition">About Us</a></li>
            <li><a href="#services" className="hover:text-fuchsia-400 transition">Services</a></li>
            <li><a href="#products" className="hover:text-fuchsia-400 transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-fuchsia-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Reach Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center"><PhoneIcon className="w-4 h-4 mr-2 text-fuchsia-400"/>+91 9040475287</li>
            <li className="flex items-center"><MailIcon className="w-4 h-4 mr-2 text-fuchsia-400"/>hello@creativeimpulse.in</li>
            <li className="flex items-center"><Icon path={<path d="M12 2v10" /> && <circle cx="12" cy="12" r="10" />} className="w-4 h-4 mr-2 text-fuchsia-400"/> Mon - Fri: 9:00 AM - 6:00 PM</li>
            <li className="flex items-center"><MapPinIcon className="w-4 h-4 mr-2 text-fuchsia-400"/>Tech Park, City, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Connect</h3>
          <div className="flex space-x-5 text-2xl">
            {footerSocials.map((social, idx) => (
              <a key={idx} href={social.href} className={`text-gray-400 transition ${social.color} hover:scale-110`}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-6 text-sm">
        © {new Date().getFullYear()} Creative Impulse. All rights reserved.
      </div>
    </footer>
  );
};

const App = () => {
  // Main background for Creative Impulse: Dark, edgy gradient
  return (
    <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 min-h-screen font-sans">
      
      {/* Background Grid Overlay (Vibrant color) */}
      <div className="fixed inset-0 z-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>
       
      {/* Background Lighting/Glow Effects (Cyan and Fuchsia for energy) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30 z-10">
        <div className="absolute top-[5%] right-[5%] w-96 h-96 bg-fuchsia-800/20 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-cyan-600/20 blur-[200px] rounded-full"></div>
      </div>
      
      {/* Contact Section Content */}
      <div className="relative z-20">
        <ContactContent />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
