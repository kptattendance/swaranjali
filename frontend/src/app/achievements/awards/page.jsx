"use client";
import { motion } from "framer-motion";

export default function AwardsPage() {
  const awards = [
    "1st Prize – District Level Carnatic Vocal Competition",
    "2nd Prize – State Youth Festival",
    "Best Devotional Singer Award – Temple Utsava",
    "Young Talent Award – Cultural Sabha",
    "All India Radio Junior Performer Recognition",
    "Top Performer – Navaratri Music Festival",
    "Excellence Award – Classical Music Category",
  ];

  return (
    <div className=" bg-accent py-24 px-6 text-center">
      <h1 className="text-4xl font-bold text-primary mb-16">Student Awards</h1>

      <div className="max-w-6xl mx-auto grid text-primary md:grid-cols-3 gap-8">
        {awards.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition border-l-4 border-primary"
          >
            🏆 {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
