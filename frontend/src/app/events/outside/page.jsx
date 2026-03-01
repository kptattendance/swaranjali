"use client";
import { motion } from "framer-motion";

export default function OutsidePage() {
  const performances = [
    {
      title: "Sabha Performance",
      desc: "Students performed classical kritis in local sabhas.",
      image: "/1.png",
    },
    {
      title: "Community Cultural Festival",
      desc: "Devotional and classical presentation.",
      image: "/1.png",
    },
  ];

  return (
    <div className=" bg-white py-24 px-6 space-y-24">
      <h1 className="text-4xl font-bold text-primary text-center">
        Outside Performances
      </h1>

      {performances.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          <img src={item.image} className="rounded-xl shadow-xl" />
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
