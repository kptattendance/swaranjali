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
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-primary via-black to-primary text-white py-20 md:py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Gallery
        </motion.h1>
      </div>
      <PhotosPage />
      <VideosPage />
      <AnnualPage />
      <StagePage />
    </div>
  );
}
