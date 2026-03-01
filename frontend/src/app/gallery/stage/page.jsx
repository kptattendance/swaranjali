"use client";
import { motion } from "framer-motion";

export default function StagePage() {
  return (
    <div className=" bg-accent py-24 px-6 space-y-20">
      <h1 className="text-4xl font-bold text-primary text-center">
        Stage Performance Moments
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <img src="/1.png" className="rounded-xl shadow-xl" />
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Classical Concert Performance
          </h2>
          <p className="text-gray-700">
            Students presenting structured Carnatic kritis with full stage
            discipline and confidence.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
