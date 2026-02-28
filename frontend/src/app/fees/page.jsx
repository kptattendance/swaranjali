"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TimingsPage from "./timings/page";

export default function FeesPage() {
  const plans = [
    {
      title: "Beginner Level",
      price: "₹XXXX / month",
      features: [
        "Foundation Training",
        "Sarali & Janta Varisai",
        "Basic Geethams",
        "1–2 Classes per Week",
        "Performance Guidance",
      ],
      highlight: false,
    },
    {
      title: "Intermediate Level",
      price: "₹XXXX / month",
      features: [
        "Varnams & Kritis",
        "Tala & Raga Theory",
        "Voice Culture Training",
        "Stage Preparation",
        "Competition Guidance",
      ],
      highlight: true,
    },
    {
      title: "Advanced Level",
      price: "₹XXXX / month",
      features: [
        "Manodharma Training",
        "Alapana & Swaras",
        "Concert Preparation",
        "Individual Mentorship",
        "Advanced Theory",
      ],
      highlight: false,
    },
    {
      title: "Harmonium",
      price: "₹XXXX / month",
      features: [
        "Basic Fingering",
        "Raga-Based Playing",
        "Bhajan Accompaniment",
        "Vocal Support Training",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TimingsPage />
      {/* HERO */}
      <div className="bg-primary text-white py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Fees Structure
        </motion.h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Affordable, structured, and value-driven music education designed for
          all levels of learners.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-4 gap-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl shadow-2xl p-8 relative ${
              plan.highlight
                ? "bg-primary text-white"
                : "bg-accent text-gray-800"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-secondary text-black px-4 py-1 text-sm font-semibold rounded-bl-xl">
                Most Popular
              </div>
            )}

            <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>

            <p className="text-xl font-semibold mb-6">{plan.price}</p>

            <ul className="space-y-3 text-sm mb-8">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>

            <Link
              href="/contact"
              className={`block text-center px-6 py-3 rounded-full ${
                plan.highlight
                  ? "bg-white text-primary"
                  : "bg-primary text-white"
              }`}
            >
              Enroll Now
            </Link>
          </motion.div>
        ))}
      </div>

      {/* PAYMENT POLICY */}
      <div className="bg-accent py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Payment & Policy
        </h2>

        <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
          Fees are payable monthly in advance. Once paid, fees are
          non-refundable except under exceptional circumstances. Special
          workshops and masterclasses may carry additional fees. Concessions may
          be considered for siblings or long-term students.
        </p>
      </div>
    </div>
  );
}
