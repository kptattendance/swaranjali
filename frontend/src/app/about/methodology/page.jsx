"use client";

import { motion } from "framer-motion";

export default function MethodologyPage() {
  const methods = [
    {
      title: "Strong Foundation Training",
      description:
        "Students begin with Sarali Varisai, Janta Varisai, and Alankaras to build a solid classical base with proper shruti and tala alignment.",
    },
    {
      title: "Structured Progression",
      description:
        "Systematic movement from Geethams to Varnams and Kritis ensures gradual and disciplined learning.",
    },
    {
      title: "Voice Culture & Shruti Shuddham",
      description:
        "Regular voice exercises to improve pitch accuracy, clarity, breath control, and tonal quality.",
    },
    {
      title: "Theory + Practical Integration",
      description:
        "Students learn raga structure, tala system, and lyrical meaning along with practical singing.",
    },
    {
      title: "Stage Exposure",
      description:
        "Frequent opportunities for temple performances, annual day programs, competitions, and cultural events.",
    },
    {
      title: "Individual Attention",
      description:
        "Personalized correction, guidance, and encouragement for each student’s growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-16">
        Teaching Methodology
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {methods.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-accent p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h2 className="text-xl font-semibold text-primary mb-4">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Extra Detailed Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Assessment & Performance System
        </h2>
        <p className="leading-relaxed text-gray-700">
          Regular revision sessions, mock performances, and evaluation ensure
          that students maintain discipline and confidence. The academy
          encourages participation in competitions and sabha programs to build
          stage presence and self-confidence.
        </p>
      </div>
    </div>
  );
}
