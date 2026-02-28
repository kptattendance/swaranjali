"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SugamaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/sugama-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold"
          >
            Sugama Sangeetha
          </motion.h1>

          <p className="mt-4 text-lg max-w-2xl">
            Expressive light music rooted in classical discipline and emotional
            depth.
          </p>
        </div>
      </div>

      {/* ABOUT THE COURSE */}
      <section className="py-24 px-6 bg-accent text-center">
        <h2 className="text-4xl font-bold text-primary mb-10">
          About the Course
        </h2>

        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed text-lg">
          Sugama Sangeetha blends classical foundation with melodious light
          compositions. Students develop voice modulation, lyrical clarity,
          emotional expression, and stage confidence while preserving musical
          discipline.
        </p>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-primary mb-16">
          What You Will Learn
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            "Devotional Compositions",
            "Kannada Light Music",
            "Bhavageethe",
            "Semi-Classical Songs",
            "Voice Modulation Techniques",
            "Stage Performance Training",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-accent p-8 rounded-xl shadow-lg"
            >
              🎤 {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE FOCUS */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-10">Performance & Expression</h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          Students are encouraged to perform in cultural programs, competitions,
          annual day events, and devotional gatherings. The course enhances
          confidence, stage presence, and audience engagement.
        </p>
      </section>

      {/* LEVEL STRUCTURE */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-primary mb-16">
          Course Structure
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="bg-accent p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Beginner
            </h3>
            <p className="text-gray-700">
              Basic devotional songs, simple melodies, and pitch alignment.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Intermediate
            </h3>
            <p className="text-gray-700">
              Bhavageethe, semi-classical songs, and expressive singing.
            </p>
          </div>

          <div className="bg-accent p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">
              Advanced
            </h3>
            <p className="text-gray-700">
              Stage performance mastery and emotional interpretation techniques.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-accent text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Start Your Musical Journey
        </h2>

        <p className="text-gray-700 mb-8">
          Join Sugama Sangeetha classes and express your voice with confidence.
        </p>

        <Link
          href="/contact"
          className="bg-primary text-white px-10 py-4 rounded-full text-lg hover:scale-105 transition"
        >
          Enroll Now
        </Link>
      </section>
    </div>
  );
}
