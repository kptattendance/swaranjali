"use client";

import { motion } from "framer-motion";

export default function CarnaticPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <div
        className="h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/carnatic.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold"
          >
            Carnatic Vocal Music
          </motion.h1>
          <p className="mt-4 text-lg max-w-2xl">
            Structured classical training rooted in tradition and discipline.
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
            "Sarali & Janta Varisai",
            "Alankaras in Multiple Talas",
            "Geethams & Swarajatis",
            "Varnams (Adi & Ata Tala)",
            "Kritis of Trinity Composers",
            "Basic Manodharma (Alapana & Swaras)",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              🎵 {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* LEVEL STRUCTURE */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-primary mb-16">Course Levels</h2>

        <div className="max-w-5xl mx-auto space-y-10">
          {[
            {
              level: "Beginner Level",
              desc: "Foundation exercises, swara training, basic geethams.",
            },
            {
              level: "Intermediate Level",
              desc: "Varnams, kritis, tala mastery, theory sessions.",
            },
            {
              level: "Advanced Level",
              desc: "Manodharma, alapana, kalpana swaras, concert preparation.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
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

      {/* PERFORMANCE OPPORTUNITIES */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-10">
          Stage & Certification Opportunities
        </h2>

        <p className="max-w-4xl mx-auto text-lg leading-relaxed">
          Students receive opportunities to perform in temple festivals, annual
          day programs, cultural sabhas, competitions, and workshops.
          Certification guidance is provided for recognized music exams.
        </p>
      </section>

      {/* ENROLL CTA */}
      <section className="py-24 px-6 text-center bg-white">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Begin Your Musical Journey
        </h2>

        <p className="mb-8 text-gray-700">
          Enroll now and experience disciplined classical music training.
        </p>

        <a
          href="/contact"
          className="bg-primary text-white px-10 py-4 rounded-full text-lg hover:scale-105 transition"
        >
          Enroll Now
        </a>
      </section>
    </div>
  );
}
