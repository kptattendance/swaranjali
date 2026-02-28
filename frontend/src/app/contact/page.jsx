"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          Contact Us
        </motion.h1>
        <p className="mt-4 text-lg">
          Join Swaranjali and begin your musical journey today.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16">
        {/* Left Side Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {/* Phone */}
          <div className="flex items-start gap-6">
            <FaPhoneAlt className="text-primary text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">
                Phone Numbers
              </h2>
              <p>📞 +91 90191 01127</p>
              <p>📞 +91 XXXXX XXXXX</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-6">
            <FaMapMarkerAlt className="text-primary text-2xl mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">Address</h2>
              <p>
                Swaranjali Sangeetha Kalaa Shaale (R)
                <br />
                Urva Marigudi Road
                <br />
                Mangalore – 575006
                <br />
                Karnataka, India
              </p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-6">
            <FaWhatsapp className="text-green-500 text-3xl mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">WhatsApp</h2>
              <a
                href="https://wa.me/919019101127"
                target="_blank"
                className="bg-green-500 text-white px-6 py-3 rounded-full inline-block mt-2 hover:scale-105 transition"
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
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* Google Map Section */}
      <div className="py-20 bg-accent px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          Find Us Here
        </h2>

        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_LINK"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
