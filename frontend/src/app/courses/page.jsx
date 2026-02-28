"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CoursesPage() {
  const courses = [
    {
      title: "Carnatic Vocal Music",
      description:
        "Structured classical training with strong foundation and performance focus.",
      link: "/courses/carnatic",
      emoji: "🎵",
    },
    {
      title: "Sugama Sangeetha",
      description:
        "Light music rooted in classical discipline and expressive singing.",
      link: "/courses/sugama",
      emoji: "🎤",
    },
    {
      title: "Bhajans",
      description:
        "Devotional music training with group performance and spiritual discipline.",
      link: "/courses/bhajans",
      emoji: "🙏",
    },
    {
      title: "Harmonium",
      description:
        "Instrumental training to strengthen swara understanding and accompaniment skills.",
      link: "/courses/harmonium",
      emoji: "🎹",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <div className="bg-primary text-white py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Our Courses
        </motion.h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Explore our structured music programs designed for all age groups and
          skill levels.
        </p>
      </div>

      {/* COURSE CARDS */}
      <div className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-accent p-10 rounded-2xl shadow-xl text-left"
          >
            <h2 className="text-2xl font-bold text-primary mb-4">
              {course.emoji} {course.title}
            </h2>

            <p className="text-gray-700 mb-6">{course.description}</p>

            <Link
              href={course.link}
              className="bg-primary text-white px-6 py-3 rounded-full inline-block hover:scale-105 transition"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-accent py-16 text-center">
        <Link
          href="/contact"
          className="bg-primary text-white px-10 py-4 rounded-full text-lg hover:scale-105 transition"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
}
