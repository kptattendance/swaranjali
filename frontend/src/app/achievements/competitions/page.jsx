"use client";
import { motion } from "framer-motion";

export default function CompetitionPage() {
  const competitions = [
    { year: "2025", event: "State Level Carnatic Vocal – 1st Prize" },
    { year: "2024", event: "District Youth Festival – 2nd Prize" },
    { year: "2023", event: "National Online Music Contest – Finalist" },
    { year: "2022", event: "Bhajan Competition – Winner" },
    { year: "2021", event: "School Cultural Fest – Best Vocalist" },
  ];

  return (
    <div className="min-h-screen bg-white py-24 px-6">

      <h1 className="text-4xl font-bold text-primary text-center mb-16">
        Competition Wins
      </h1>

      <div className="max-w-4xl mx-auto border-l-4 border-primary pl-8 space-y-12">
        {competitions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-primary">
              {item.year}
            </h2>
            <p className="text-gray-700">{item.event}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}