"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-black to-primary text-white py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Terms & Conditions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-4xl mx-auto text-sm md:text-lg opacity-90"
        >
          These Terms and Conditions govern the use of the website and services
          provided by Swaranjali Sangeetha Kalaa Shaale (R). By accessing this
          website, you agree to comply with and be bound by these terms.
        </motion.p>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-20 space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-primary"
          >
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">
              {section.title}
            </h2>

            {section.paragraphs &&
              section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-700 leading-relaxed text-sm md:text-base mb-4"
                >
                  {para}
                </p>
              ))}

            {section.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
                {section.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing and using this website, you accept and agree to be bound by these Terms & Conditions.",
      "If you do not agree with any part of these terms, you must not use this website or enroll in any of the academy’s services.",
    ],
  },
  {
    title: "2. Enrollment & Participation",
    paragraphs: [
      "Enrollment in courses offered by Swaranjali Sangeetha Kalaa Shaale (R) is subject to availability and approval.",
    ],
    bullets: [
      "Students must provide accurate personal information.",
      "Participation in classes requires regular attendance and discipline.",
      "The academy reserves the right to suspend or terminate enrollment for misconduct.",
    ],
  },
  {
    title: "3. Fees & Payments",
    paragraphs: [
      "All course fees must be paid as per the prescribed schedule communicated during admission.",
    ],
    bullets: [
      "Fees once paid are non-refundable unless otherwise stated.",
      "Delayed payments may result in temporary suspension from classes.",
      "The academy reserves the right to revise fee structures with prior notice.",
    ],
  },
  {
    title: "4. Code of Conduct",
    paragraphs: [
      "Students are expected to maintain discipline and respect within the academy premises and during online sessions.",
    ],
    bullets: [
      "Respect towards Guru and fellow students is mandatory.",
      "Any disruptive or inappropriate behavior may result in disciplinary action.",
      "Damage to academy property must be compensated.",
    ],
  },
  {
    title: "5. Intellectual Property",
    paragraphs: [
      "All course materials, recordings, compositions, and digital content provided during training remain the intellectual property of the academy.",
    ],
    bullets: [
      "Unauthorized recording or distribution is prohibited.",
      "Materials may not be reproduced for commercial purposes.",
      "Violation may result in legal consequences.",
    ],
  },
  {
    title: "6. Events & Performances",
    paragraphs: [
      "Participation in concerts, competitions, or cultural events is voluntary.",
    ],
    bullets: [
      "Students must follow event guidelines.",
      "Schedules may change due to unforeseen circumstances.",
      "The academy is not liable for external event cancellations.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    paragraphs: [
      "Swaranjali Sangeetha Kalaa Shaale (R) shall not be liable for any indirect or consequential damages arising from use of the website or participation in academy activities.",
    ],
  },
  {
    title: "8. Modifications to Terms",
    paragraphs: [
      "The academy reserves the right to modify these Terms & Conditions at any time without prior notice.",
      "Continued use of the website constitutes acceptance of revised terms.",
    ],
  },
  {
    title: "9. Governing Law",
    paragraphs: [
      "These Terms & Conditions shall be governed in accordance with the laws applicable in Karnataka, India.",
    ],
  },
];
