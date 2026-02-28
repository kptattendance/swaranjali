"use client";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="py-20 bg-accent text-center">
      <h2 className="text-4xl font-bold text-primary mb-12">Contact Us</h2>

      <ContactForm />
    </section>
  );
}
