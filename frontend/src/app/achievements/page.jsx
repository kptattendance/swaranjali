"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AwardsPage from "./awards/page";
import CompetitionPage from "./competitions/page";
import MediaPage from "./media/page";
import CertificatesPage from "./certificates/page";
import MilestonesPage from "./milestones/page";

export default function AchievementsPage() {
  const sections = [
    { title: "Student Awards", path: "/achievements/awards" },
    { title: "Competition Wins", path: "/achievements/competitions" },
    { title: "Media Coverage", path: "/achievements/media" },
    { title: "Certificates", path: "/achievements/certificates" },
    { title: "Performance Milestones", path: "/achievements/milestones" },
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
          Achievements & Recognition
        </motion.h1>
      </div>
      <AwardsPage />
      <CompetitionPage />
      <MediaPage />
      <CertificatesPage />
      <MilestonesPage />
    </div>
  );
}
