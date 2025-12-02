// Home.jsx

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/led.jpg";
import { FaPaintBrush, FaRocket, FaHeadset, FaSearch, FaChevronRight } from "react-icons/fa";

// Counter Animation
const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 4000;
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
    <span className="text-5xl md:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_15px_cyan]">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// DATA SECTION
const statsData = [
  { label: "Satisfied Customers", value: 50000, suffix: "+", color: "text-cyan-400" },
  { label: "Projects Completed", value: 1500, suffix: "+", color: "text-fuchsia-400" },
  { label: "Years Experience", value: 5, suffix: "+", color: "text-purple-300" },
];

const features = [
  {
    title: "Premium Quality Designs",
    desc: "Creative, modern and aesthetic designs made with precision.",
    icon: <FaPaintBrush className="text-fuchsia-400" />,
  },
  {
    title: "Swift Execution",
    desc: "Fast delivery without compromising quality.",
    icon: <FaRocket className="text-cyan-400" />,
  },
  {
    title: "Dedicated Support",
    desc: "Always available to help you with your design needs.",
    icon: <FaHeadset className="text-purple-400" />,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-[#0A0A12] to-[#02121F] text-white overflow-hidden">

      {/* Neon Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-25">
        <div className="absolute top-[15%] left-[10%] w-80 h-80 bg-fuchsia-600/40 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-cyan-600/40 blur-[150px] rounded-full"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-24 z-10">

        {/* TEXT */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 drop-shadow-[0_0_25px_cyan]">
              Creative Impulse
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-lg mx-auto md:mx-0 border-l-4 border-fuchsia-500 pl-4">
            Where imagination meets modern design — crafted with neon precision and a sleek futuristic finish.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center md:justify-start gap-4 pt-6">
            <motion.a
              whileHover={{ scale: 1.07, boxShadow: "0px 0px 25px rgba(255,0,255,0.6)" }}
              href="#features"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-black rounded-full font-bold shadow-xl uppercase tracking-wide"
            >
              Explore Our Work <FaChevronRight />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.07, borderColor: "#22D3EE" }}
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-300 rounded-full shadow-xl font-semibold"
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
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-3xl shadow-[0_0_50px_rgba(0,255,255,0.6)] w-72 md:w-[400px] border-4 border-cyan-400/50"
          />
        </motion.div>
      </section>

      {/* STATS */}
      <section className="py-20 bg-black/40 backdrop-blur-sm border-y border-fuchsia-700/40">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-fuchsia-300 drop-shadow-xl mb-14">Our Achievements</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="p-10 rounded-3xl bg-[#0D0F21]/80 backdrop-blur-xl border border-fuchsia-600/40 shadow-[0_0_25px_rgba(255,0,255,0.3)] hover:shadow-[0_0_35px_rgba(0,255,255,0.6)] transition duration-300"
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="mt-4 text-cyan-300 font-semibold text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6">
        <h2 className="text-center text-4xl font-extrabold mb-16 text-cyan-300 drop-shadow-[0_0_20px_cyan]">
          Why Clients Love Us
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="p-10 bg-[#1A1C2E]/70 backdrop-blur-xl rounded-3xl border border-cyan-500/40 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:border-fuchsia-500 hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition"
            >
              <div className="text-5xl mb-4 p-4 w-max rounded-full bg-black/40 ring-4 ring-fuchsia-500/40">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-fuchsia-300">{item.title}</h3>
              <p className="text-gray-300 mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;



