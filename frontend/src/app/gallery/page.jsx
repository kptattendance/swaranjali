"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PhotosPage from "./photos/page";
import VideosPage from "./videos/page";
import StagePage from "./stage/page";
import AnnualGalleryPage from "./annual/page";

export default function GalleryPage() {
  const sections = [
    { title: "Photos", path: "/gallery/photos" },
    { title: "Videos", path: "/gallery/videos" },
    { title: "Annual Day Highlights", path: "/gallery/annual" },
    { title: "Stage Performance Moments", path: "/gallery/stage" },
  ];

  return (
    <div className=" bg-white">
      <div className="bg-gradient-to-br from-primary via-black to-primary text-white py-20 md:py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Gallery
        </motion.h1>{" "}
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
          Moments of Melody, Memories of a Musical Journey.
        </p>
      </div>
      <PhotosPage />
      <VideosPage />
      <AnnualGalleryPage />
      <StagePage />
    </div>
  );
}
