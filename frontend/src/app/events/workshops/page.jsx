"use client";
import { motion } from "framer-motion";

export default function WorkshopsPage() {
  const workshops = [
    "Raga Exploration Workshop",
    "Voice Culture Training",
    "Manodharma Basics",
    "Bhajan Camp",
  ];

  return (
    <div className=" bg-white py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-primary mb-16">
        Workshops & Masterclasses
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {workshops.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-primary text-white p-8 rounded-xl shadow-lg"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
