"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-black to-primary text-white py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 max-w-4xl mx-auto text-sm md:text-lg opacity-90"
        >
          This Privacy Policy explains how Swaranjali Sangeetha Kalaa Shaale (R)
          collects, uses, protects, and handles your personal information when
          you use our website and services.
        </motion.p>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-20 space-y-12">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-primary"
          >
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">
              {section.title}
            </h2>

            {section.paragraphs &&
              section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-gray-700 leading-relaxed text-sm md:text-base mb-4"
                >
                  {para}
                </p>
              ))}

            {section.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
                {section.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: [
      "We may collect personal information when you interact with our website, enroll in courses, or contact us.",
    ],
    bullets: [
      "Full name of student or parent/guardian",
      "Email address and phone number",
      "Residential address",
      "Course enrollment details",
      "Payment information (processed securely)",
      "Photographs or videos taken during events (with consent)",
    ],
  },
  {
    title: "2. How We Use Your Information",
    paragraphs: [
      "The information collected is used strictly for administrative, educational, and communication purposes.",
    ],
    bullets: [
      "To process enrollments and manage classes",
      "To communicate important updates and schedules",
      "To organize events and performances",
      "To improve our website and services",
      "To maintain internal records",
    ],
  },
  {
    title: "3. Data Protection & Security",
    paragraphs: [
      "We are committed to ensuring that your information is secure.",
    ],
    bullets: [
      "Personal data is stored securely.",
      "Access to sensitive information is restricted.",
      "Reasonable administrative and technical safeguards are implemented.",
      "We do not sell or trade personal data.",
    ],
  },
  {
    title: "4. Sharing of Information",
    paragraphs: [
      "We do not share your personal information with third parties except under the following circumstances:",
    ],
    bullets: [
      "When required by law or legal authorities",
      "For event registrations conducted through trusted partners",
      "When necessary to process payments securely",
    ],
  },
  {
    title: "5. Use of Media (Photos & Videos)",
    paragraphs: [
      "During classes, performances, or events, photographs and videos may be captured.",
    ],
    bullets: [
      "Media may be used for promotional purposes.",
      "Images may appear on our website or social media.",
      "Consent will be obtained where required.",
    ],
  },
  {
    title: "6. Cookies & Website Tracking",
    paragraphs: ["Our website may use cookies to enhance user experience."],
    bullets: [
      "Cookies help improve website functionality.",
      "Users may disable cookies through browser settings.",
      "Some features may not function properly if cookies are disabled.",
    ],
  },
  {
    title: "7. User Rights",
    paragraphs: [
      "You have the right to access, update, or request deletion of your personal data.",
    ],
    bullets: [
      "Request correction of inaccurate information",
      "Withdraw consent where applicable",
      "Request removal of stored data (subject to legal obligations)",
    ],
  },
  {
    title: "8. Retention of Information",
    paragraphs: [
      "We retain personal data only for as long as necessary to fulfill educational and administrative purposes.",
    ],
  },
  {
    title: "9. Updates to This Policy",
    paragraphs: [
      "We reserve the right to update this Privacy Policy at any time.",
      "Users are encouraged to review this page periodically for changes.",
    ],
  },
  {
    title: "10. Contact Us",
    paragraphs: [
      "If you have any questions regarding this Privacy Policy, you may contact us through our official Contact page.",
    ],
  },
];
