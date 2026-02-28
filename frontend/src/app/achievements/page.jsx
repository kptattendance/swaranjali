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
    <div className="min-h-screen bg-gradient-to-br from-primary via-black to-primary text-white py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-20"
      >
        Achievements & Recognition
      </motion.h1>

      <AwardsPage />
      <CompetitionPage />
      <MediaPage />
      <CertificatesPage />
      <MilestonesPage />
    </div>
  );
}
