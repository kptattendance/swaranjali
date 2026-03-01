"use client";

import Link from "next/link";

export default function CourseSection() {
  const courses = [
    {
      name: "Carnatic Music",
      link: "/courses/carnatic",
      desc: "Comprehensive training in classical Carnatic music with focus on shruti, laya, kritis, and stage performance.",
    },
    {
      name: "Sugama Sangeetha",
      link: "/courses/sugama",
      desc: "Melodious light music training blending classical foundation with expressive contemporary compositions.",
    },
    {
      name: "Bhajans",
      link: "/courses/bhajans",
      desc: "Devotional music sessions cultivating spiritual expression through traditional bhajans and namasankeerthana.",
    },
    {
      name: "Harmonium",
      link: "/courses/harmonium",
      desc: "Structured harmonium training covering fingering techniques, accompaniment skills, and solo performance.",
    },
  ];

  return (
    <section className="py-20 bg-accent text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">Our Courses</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {courses.map((course, index) => (
          <Link key={index} href={course.link}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer h-full">
              <h3 className="text-xl font-semibold text-primary">
                {course.name}
              </h3>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {course.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
