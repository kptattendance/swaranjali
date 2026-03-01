"use client";

import GuruPage from "./guru/page";
import HistoryPage from "./history/page";
import VisionPage from "./vision/page";
import MethodologyPage from "./methodology/page";
import RecognitionPage from "./recognition/page";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-primary via-black to-primary text-white py-20 md:py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          About Swaranjali
        </motion.h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
          Join Swaranjali and begin your musical journey today.
        </p>
      </div>

      <GuruPage />
      <HistoryPage />
      <VisionPage />
      <MethodologyPage />
      <RecognitionPage />
    </div>
  );
}
