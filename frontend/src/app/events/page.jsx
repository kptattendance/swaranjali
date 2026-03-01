"use client";

import { motion } from "framer-motion";
import PastProgramsPage from "./past/page";
import OutsidePage from "./outside/page";
import TemplePage from "./temple/page";
import AnnualPage from "./annual/page";
import WorkshopsPage from "./workshops/page";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-primary via-black to-primary text-white py-20 md:py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Events & Performances
        </motion.h1>

        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Explore our structured music programs designed for all age groups and
          skill levels.
        </p>
      </div>

      <PastProgramsPage />
      <OutsidePage />
      <TemplePage />
      <AnnualPage />
      <WorkshopsPage />
    </div>
  );
}
