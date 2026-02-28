"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TimingsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <div className="bg-accent text-primary py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Batch Timings
        </motion.h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Flexible batches designed for students, working professionals, and
          devotional learners.
        </p>
      </div>

      {/* TIMING CARDS */}
      <div className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12">
        {/* Weekday Batch */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-primary p-10 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-accent mb-6">
            Weekday Batches
          </h2>

          <ul className="space-y-3 text-white">
            <li>🕒 4:30 PM – 5:30 PM (Beginner)</li>
            <li>🕒 5:30 PM – 6:30 PM (Intermediate)</li>
            <li>🕒 6:30 PM – 7:30 PM (Advanced)</li>
          </ul>
        </motion.div>

        {/* Weekend Batch */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-accent p-10 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">
            Weekend Batches
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>📅 Saturday – 9:00 AM to 12:00 PM</li>
            <li>📅 Sunday – 9:00 AM to 11:00 AM</li>
            <li>Special Bhajan Session – Sunday Evening</li>
          </ul>
        </motion.div>
      </div>

      {/* INDIVIDUAL & ONLINE */}
      <div className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          Individual & Online Options
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-accent p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              🎯 Individual Classes
            </h3>
            <p className="text-gray-700">
              One-on-one sessions available for focused training and
              advanced-level preparation.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              🌐 Online Classes
            </h3>
            <p className="text-gray-700">
              Online sessions available for students outside Mangalore with
              flexible scheduling options.
            </p>
          </div>
        </div>
      </div>

      {/* IMPORTANT NOTE */}
      <div className="bg-accent text-primary py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Important Notes</h2>

        <p className="max-w-4xl mx-auto leading-relaxed">
          Batch timings may be adjusted based on student enrollment and level
          requirements. Special workshop sessions are conducted periodically.
          Parents are encouraged to contact the academy for updated schedules
          and availability.
        </p>

        <div className="mt-10">
          <Link
            href="/contact"
            className="bg-white text-primary px-10 py-4 rounded-full text-lg hover:scale-105 transition"
          >
            Contact for Enrollment
          </Link>
        </div>
      </div>
    </div>
  );
}
