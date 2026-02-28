"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import PhotosPage from "./photos/page";
import VideosPage from "./videos/page";
import AnnualPage from "../events/annual/page";
import StagePage from "./stage/page";

export default function GalleryPage() {
  const sections = [
    { title: "Photos", path: "/gallery/photos" },
    { title: "Videos", path: "/gallery/videos" },
    { title: "Annual Day Highlights", path: "/gallery/annual" },
    { title: "Stage Performance Moments", path: "/gallery/stage" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-black text-white py-24 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-16"
      >
        Gallery
      </motion.h1>

      <PhotosPage />
      <VideosPage />
      <AnnualPage />
      <StagePage />
    </div>
  );
}
