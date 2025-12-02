// Home.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/led.jpg";
import { FaPaintBrush, FaRocket, FaHeadset, FaSearch, FaChevronRight } from "react-icons/fa"; // Added professional icons

// Counter Animation (Unchanged logic, updated styling)
const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 4000;
    // Calculate increment based on duration and a fixed interval
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
    <span className="text-5xl md:text-6xl font-extrabold text-amber-300 drop-shadow-xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// --- DATA (Updated to use FaIcons) ---
const statsData = [
  { label: "Satisfied Customers", value: 50000, suffix: "+", color: "text-amber-500" },
  { label: "Projects Completed", value: 1500, suffix: "+", color: "text-red-500" },
  { label: "Years Experience", value: 5, suffix: "+", color: "text-red-300" },
];

const features = [
  {
    title: "Premium Quality Designs",
    desc: "We deliver professional-grade creative work with strong attention to detail and a luxury aesthetic.",
    icon: <FaPaintBrush className="text-amber-400" />,
  },
  {
    title: "Swift Execution",
    desc: "We ensure fast turnaround times without compromising the depth and quality of the final product.",
    icon: <FaRocket className="text-red-400" />,
  },
  {
    title: "Dedicated Support",
    desc: "Dedicated help and consultation for all your design needs, available when you need us.",
    icon: <FaHeadset className="text-amber-400" />,
  },
];

// --- MAIN COMPONENT ---
const Home = () => {
  return (
    // Background: Deep Chocolate Brown Gradient
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1E110A] via-[#2A180E] to-[#3B2213] text-white overflow-hidden">
      
      {/* Background Lighting/Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-amber-600/30 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-red-800/30 blur-[150px] rounded-full"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24 z-10">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-2xl">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-red-200 drop-shadow-lg">
              Creative Impulse
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 border-l-4 border-amber-600 pl-4">
            We design your imagination — turning ideas into **eye-catching,
            professional graphics** with the warmth and depth of a high-quality finish.
          </p>

          {/* BUTTONS - Enhanced with chocolatey colors */}
          <div className="flex justify-center md:justify-start gap-4 pt-6">
            <motion.a
              whileHover={{ scale: 1.07, boxShadow: "0px 10px 20px rgba(255,160,0,0.4)" }}
              href="#features" // Corrected link
              className="flex items-center gap-2 px-8 py-4 bg-amber-600 text-black rounded-full shadow-2xl font-bold uppercase tracking-wide transition duration-300"
            >
              Explore Our Work <FaChevronRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.07, borderColor: "#B45309" }}
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-red-700 text-red-200 rounded-full shadow-xl font-semibold transition duration-300"
            >
              <FaSearch /> Request A Quote
            </motion.a>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 md:mb-0 relative"
        >
          <motion.img
            src={heroImg}
            alt="Hero"
            // Floating animation similar to About page
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-3xl shadow-[0px_0px_60px_rgba(255,180,0,0.5)] w-72 md:w-[400px] border-4 border-amber-600/50"
          />
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <section id="stats" className="py-20 bg-black/50 backdrop-blur-sm border-y border-amber-800/50">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-red-200 mb-14 drop-shadow-xl">
            Numbers That Speak
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                // Card style: Darker background, warm border/shadow on hover
                className={`p-10 rounded-3xl bg-[#2A180E]/80 backdrop-blur-xl border-t-4 border-red-800 shadow-2xl 
                hover:shadow-[0px_0px_30px_rgba(255,160,0,0.5)] transition duration-300 cursor-pointer`}
              >
                <Counter value={stat.value} suffix={stat.suffix} />

                <p className="mt-4 text-amber-200 font-semibold text-xl">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-24 px-6">
        <h2 className="text-center text-4xl font-extrabold mb-16 drop-shadow-xl text-amber-300">
          Why Clients Love Our Service
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              // Feature Card Style: Dark background, light warm glow border
              className="p-10 bg-[#3B2213]/70 backdrop-blur-xl rounded-3xl border-2 border-red-800/50 shadow-2xl
              hover:border-amber-600 transition duration-300"
            >
              <div className="text-5xl mb-4 p-3 w-max rounded-full bg-black/30 ring-4 ring-amber-700/50">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-amber-200 mt-2">{item.title}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default Home;


