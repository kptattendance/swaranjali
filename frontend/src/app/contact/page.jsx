"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-black to-primary text-white py-20 md:py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Contact Us
        </motion.h1>
        <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
          Join Swaranjali and begin your musical journey today.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto py-14 md:py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {/* Phone */}
          <div className="flex items-start gap-4 md:gap-6">
            <FaPhoneAlt className="text-blue-600 text-xl md:text-2xl mt-1" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                Phone Numbers
              </h2>
              <p className="text-sm md:text-base">
                📞 +91 90191 01127 / +91 93435 73134
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 md:gap-6">
            <FaMapMarkerAlt className="text-red-600 text-2xl md:text-3xl mt-1" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                Address
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                Swaranjali Sangeetha Kalaa Shaale (R),
                <br />
                Shreyas, 1st Floor, Urva Marigudi Road,
                <br />
                Mangalore, Karnataka, India – 575006.
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4 md:gap-6">
            <FaWhatsapp className="text-green-500 text-2xl md:text-3xl mt-1" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">
                WhatsApp
              </h2>
              <a
                href="https://wa.me/919019101127"
                target="_blank"
                className="bg-green-500 text-white px-5 md:px-6 py-2 md:py-3 rounded-full inline-block mt-2 hover:scale-105 transition text-sm md:text-base"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          

          <ContactForm />
        </motion.div>
      </div>

      {/* Google Map Section */}
      <div className="py-14 md:py-20 bg-accent px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-8 md:mb-12">
          Find Us Here
        </h2>

        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d185.15784150652456!2d74.83105136748283!3d12.8907257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1772324076447!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
