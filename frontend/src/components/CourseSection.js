"use client";

import { useState } from "react";

export default function CourseSection() {
  return (
    <section className="py-20 bg-accent text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">Our Courses</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        {["Carnatic Music", "Sugama Sangeetha", "Bhajans", "Harmonium"].map(
          (course, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-primary">{course}</h3>
              <p className="mt-4 text-gray-600">
                Structured training with classical foundation and performance
                guidance.
              </p>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
