"use client";
import { motion } from "framer-motion";

export default function GuruPage() {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h1 className="text-4xl font-bold text-primary mb-6">
            About the Guru
          </h1>

          <p className="mb-4 leading-relaxed">
            A dedicated Carnatic vocalist with years of experience in teaching
            and stage performance. The Guru has trained students who have
            performed in temple festivals, competitions, and cultural events.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Qualifications
          </h2>

          <ul className="list-disc list-inside space-y-2">
            <li>Vidwat in Carnatic Music</li>
            <li>Senior Grade Certification</li>
            <li>All India Radio Performer</li>
            <li>25+ Years of Teaching Experience</li>
            <li>Performed in Various Sabhas & Cultural Programs</li>
          </ul>
        </div>

        <div>
          <img
            src="/images/guru2.jpeg"
            alt="Guru"
            className="rounded-xl shadow-xl w-100"
          />
        </div>
      </motion.div>
    </div>
  );
}
