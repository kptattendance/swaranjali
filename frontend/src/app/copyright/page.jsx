"use client";

import { motion } from "framer-motion";

export default function CopyrightPage() {
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
          Copyright Notice
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-4xl mx-auto text-sm md:text-lg opacity-90"
        >
          This Copyright Notice outlines the ownership and protection of
          intellectual property belonging to Swaranjali Sangeetha Kalaa Shaale
          (R).
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
    title: "1. Ownership of Content",
    paragraphs: [
      "All content displayed on this website, including but not limited to text, images, logos, graphics, audio recordings, video recordings, course materials, and design elements, is the intellectual property of Swaranjali Sangeetha Kalaa Shaale (R) unless otherwise stated.",
      "This content is protected under applicable copyright and intellectual property laws.",
    ],
  },
  {
    title: "2. Protected Materials",
    bullets: [
      "Course syllabi and teaching materials",
      "Original musical compositions and notations",
      "Audio and video recordings of performances",
      "Photographs from events and programs",
      "Logos, branding elements, and website design",
      "Digital content including downloadable resources",
    ],
  },
  {
    title: "3. Permitted Use",
    paragraphs: [
      "Users are granted limited permission to access and view the content for personal, non-commercial, and educational purposes only.",
    ],
    bullets: [
      "Content may not be copied or reproduced for commercial use.",
      "Unauthorized distribution or modification is prohibited.",
      "Materials must not be republished without written permission.",
    ],
  },
  {
    title: "4. Prohibited Actions",
    bullets: [
      "Reproducing or duplicating content without consent",
      "Recording or redistributing classes without authorization",
      "Using academy materials for commercial gain",
      "Claiming ownership of academy intellectual property",
      "Altering logos or branding elements",
    ],
  },
  {
    title: "5. Student Recordings & Media",
    paragraphs: [
      "Any recordings of classes, rehearsals, or performances conducted by the academy remain the property of Swaranjali Sangeetha Kalaa Shaale (R).",
      "Students and parents are not permitted to distribute or monetize recordings without prior approval.",
    ],
  },
  {
    title: "6. Copyright Infringement",
    paragraphs: [
      "Any unauthorized use, reproduction, or distribution of copyrighted material may result in legal action.",
      "We reserve the right to pursue civil or criminal remedies for violations of intellectual property rights.",
    ],
  },
  {
    title: "7. Reporting Violations",
    paragraphs: [
      "If you believe that any content on this website infringes your copyright, please contact us with detailed information for review and appropriate action.",
    ],
  },
  {
    title: "8. Changes to This Notice",
    paragraphs: [
      "Swaranjali Sangeetha Kalaa Shaale (R) reserves the right to modify or update this Copyright Notice at any time without prior notice.",
    ],
  },
];
