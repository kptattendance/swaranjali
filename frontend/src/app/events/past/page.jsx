"use client";
import { motion } from "framer-motion";

export default function PastProgramsPage() {
  const timeline = [
    { year: "2025", event: "Navaratri Cultural Concert" },
    { year: "2024", event: "State Level Competition Participation" },
    { year: "2023", event: "District Youth Festival Performance" },
    { year: "2022", event: "Temple Annual Utsava Program" },
  ];

  return (
    <div className=" bg-accent py-24 px-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-20">
        Past Programs
      </h1>

      <div className="max-w-4xl mx-auto border-l-4 border-primary pl-8 space-y-16">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary">{item.year}</h2>
            <p className="text-gray-700 mt-2">{item.event}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
