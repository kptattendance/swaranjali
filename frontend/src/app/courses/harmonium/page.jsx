"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HarmoniumPage() {
  return (
    <div className=" bg-white">
      {/* HERO SECTION */}
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/harmonium-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold"
          >
            Harmonium Training
          </motion.h1>

          <p className="mt-4 text-lg max-w-2xl">
            Develop melodic precision, swara clarity, and accompaniment skills.
          </p>
        </div>
      </div>

      {/* WHAT YOU WILL MASTER */}
      <section className="py-24 px-6 bg-accent text-center">
        <h2 className="text-4xl font-bold text-primary mb-16">
          What You Will Master
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            "Basic Fingering Techniques",
            "Swara Identification & Accuracy",
            "Raga-Based Playing",
            "Chord & Scale Understanding",
            "Bhajan Accompaniment Skills",
            "Vocal Support Techniques",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              🎹 {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* COURSE PROGRESSION */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-primary mb-16">
          Course Progression
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">
          {[
            {
              level: "Beginner Level",
              desc: "Understanding keys, basic swaras, simple compositions and fingering exercises.",
            },
            {
              level: "Intermediate Level",
              desc: "Raga-based exercises, accompaniment practice, speed control and expression.",
            },
            {
              level: "Advanced Level",
              desc: "Bhajan accompaniment mastery, improvisation basics and performance training.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-accent p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {item.level}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRACTICAL BENEFITS */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-10">Why Learn Harmonium?</h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          Harmonium strengthens swara understanding and enhances vocal
          performance. It improves pitch accuracy, raga comprehension, and
          rhythmic coordination. Students gain confidence in accompanying
          bhajans, classical concerts, and devotional programs.
        </p>
      </section>

      {/* PERFORMANCE OPPORTUNITIES */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Performance Opportunities
        </h2>

        <p className="max-w-4xl mx-auto text-gray-700 mb-10">
          Students are given opportunities to accompany bhajans, devotional
          programs, and classical vocal concerts, enhancing real-stage
          experience.
        </p>

        <Link
          href="/contact"
          className="bg-primary text-white px-10 py-4 rounded-full text-lg hover:scale-105 transition"
        >
          Join Harmonium Classes
        </Link>
      </section>
    </div>
  );
}
