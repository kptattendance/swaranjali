"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PhotosPage() {
  const images = [
    "gallery1.jpg",
    "gallery2.jpg",
    "gallery3.jpg",
    "gallery4.jpg",
    "gallery5.jpg",
    "gallery6.jpg",
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-16">
        Photo Gallery
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <motion.img
            key={index}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(img)}
            src={`/images/${img}`}
            className="rounded-xl shadow-xl cursor-pointer"
          />
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={`/images/${selected}`}
            className="max-h-[80vh] rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
