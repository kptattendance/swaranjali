"use client";
import { motion } from "framer-motion";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/1.png')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl text-white"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Swaranjali Sangeetha Kalaa Shaale
        </h1>

        <p className="mt-6 text-xl">
          Carnatic Music • Sugama Sangeetha • Bhajans • Harmonium
        </p>

        <button className="mt-10 bg-secondary text-black px-8 py-3 rounded-full text-lg hover:scale-105 transition">
          Join Now
        </button>
      </motion.div>
    </section>
  );
}
