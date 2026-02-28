"use client";

import "swiper/css";
import AchievementsSection from "@/components/AchievementsSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import TestimonialSection from "@/components/TestimonialsSection";
import GuruSection from "@/components/GuruSection";
import CourseSection from "@/components/CourseSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <CourseSection />
      <GuruSection />
      <EventsSection />
      <AchievementsSection />
      <TestimonialSection />
      <GallerySection />
      {/* <ContactSection /> */}
    </>
  );
}
