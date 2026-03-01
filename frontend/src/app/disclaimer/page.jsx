"use client";

import { motion } from "framer-motion";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-primary via-black to-primary text-white py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Disclaimer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-4xl mx-auto text-sm md:text-lg opacity-90"
        >
          Please read this disclaimer carefully before using the website and
          services of Swaranjali Sangeetha Kalaa Shaale (R).
        </motion.p>
      </div>

      {/* Content */}
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
    title: "General Information",
    paragraphs: [
      "The information provided on this website is for general informational and educational purposes only.",
      "While Swaranjali Sangeetha Kalaa Shaale (R) strives to ensure that all content is accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information.",
    ],
    bullets: [
      "Accuracy of information cannot be guaranteed at all times.",
      "Content may change without prior notice.",
      "Users rely on information at their own discretion.",
    ],
  },
  {
    title: "Educational Purpose",
    paragraphs: [
      "All courses, materials, and resources shared on this platform are intended solely for educational and artistic development.",
      "Musical progress may vary depending on dedication, practice consistency, and individual capability.",
    ],
    bullets: [
      "No guarantee of specific performance results.",
      "No assurance of competition wins or certifications.",
      "Progress depends on personal effort.",
    ],
  },
  {
    title: "External Links Disclaimer",
    paragraphs: [
      "This website may contain links to external websites that are not provided or maintained by Swaranjali.",
    ],
    bullets: [
      "We do not guarantee accuracy of external sites.",
      "We are not responsible for third-party content.",
      "Users should review external policies separately.",
    ],
  },
  {
    title: "Intellectual Property Rights",
    paragraphs: [
      "All content including text, images, logos, videos, and course materials are the intellectual property of Swaranjali Sangeetha Kalaa Shaale (R).",
    ],
    bullets: [
      "Unauthorized reproduction is prohibited.",
      "Distribution without written consent is not permitted.",
      "Legal action may be taken for misuse.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "Under no circumstances shall Swaranjali be liable for any direct or indirect damages arising from website use or participation in academy activities.",
    ],
    bullets: [
      "No liability for technical disruptions.",
      "No responsibility for unforeseen event issues.",
      "No liability for indirect or incidental losses.",
    ],
  },
  {
    title: "Changes to Disclaimer",
    paragraphs: [
      "We reserve the right to update or modify this Disclaimer at any time without prior notice.",
    ],
    bullets: [
      "Users should periodically review this page.",
      "Continued use indicates acceptance of changes.",
    ],
  },
];
