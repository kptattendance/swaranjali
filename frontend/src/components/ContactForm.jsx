"use client";

import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", form);

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "We will contact you soon.",
      });

      setForm({ name: "", phone: "", message: "" });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-6"
    >
      <h2 className="text-xl md:text-2xl mt-0 font-bold text-center  text-primary mb-3">
        We’d Love to Hear From You 🎵
      </h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border p-3 rounded-lg"
      />

      <button
        type="submit"
        className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary hover:text-black transition"
      >
        Send Message
      </button>
    </form>
  );
}
