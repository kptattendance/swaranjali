"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BhajansPage() {
  return (
    <div className=" bg-white">
      {/* HERO SECTION */}
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/bhajan-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold"
          >
            Bhajan Training
          </motion.h1>

          <p className="mt-4 text-lg max-w-2xl">
            Devotional music that nurtures spirituality, discipline, and
            collective harmony.
          </p>
        </div>
      </div>

      {/* WHAT YOU WILL LEARN */}
      <section className="py-24 px-6 bg-accent text-center">
        <h2 className="text-4xl font-bold text-primary mb-16">
          What You Will Learn
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            "Traditional Bhajan Sampradaya",
            "Namavalis & Devaranamas",
            "Group Singing Techniques",
            "Call & Response Singing",
            "Tala Coordination",
            "Temple Performance Preparation",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              🙏 {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* DEVOTIONAL TRADITIONS */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-primary mb-16">
          Devotional Traditions Covered
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Classical Devotional Compositions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Purandaradasa Devaranamas</li>
              <li>• Thyagaraja Bhakti Kritis</li>
              <li>• Meera Bhajans</li>
              <li>• Annamacharya Keerthanas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Group Bhajan Sessions
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Navaratri Bhajan Series</li>
              <li>• Temple Utsava Performances</li>
              <li>• Bhajan Sammelan Participation</li>
              <li>• Devotional Cultural Programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SPIRITUAL BENEFITS */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Spiritual & Personal Development
        </h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          Bhajan singing enhances concentration, emotional balance, and inner
          peace. It strengthens collective harmony through group singing and
          nurtures devotion through musical expression. Students develop
          confidence, rhythm discipline, and expressive clarity.
        </p>
      </section>

      {/* PERFORMANCE OPPORTUNITIES */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-primary mb-10">
          Performance Opportunities
        </h2>

        <p className="max-w-4xl mx-auto text-gray-700 mb-10">
          Students are given opportunities to participate in temple festivals,
          Navaratri celebrations, annual day programs, and devotional cultural
          gatherings.
        </p>

        <Link
          href="/contact"
          className="bg-primary text-white px-10 py-4 rounded-full text-lg hover:scale-105 transition"
        >
          Join Bhajan Batch
        </Link>
      </section>
    </div>
  );
}
